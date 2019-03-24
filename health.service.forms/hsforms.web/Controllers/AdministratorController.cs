using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hsforms.web.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace hsforms.web.Controllers
{
    [Route("api/[controller]")]
    //[Authorize(Roles = AppRoles.Administrator)]
    public class AdministratorController : Controller
    {
        private readonly AppDbContext _appDbContext;

        public AdministratorController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("roles")]
        public async Task<IActionResult> GetRoles()
        {
            var data = await _appDbContext
                .Roles
                .ToListAsync();

            return Ok(data);
        }

        #region user management

        [HttpGet("users")]
        public async Task<IActionResult> GetUsers()
        {
            var data = await _appDbContext
                .Users
                .Include(p => p.UserRoles)
                    .ThenInclude(p => p.Role)
                .ToListAsync();

            return Ok(data);
        }

        [HttpGet("users/{id}")]
        public async Task<IActionResult> GetUser(string id)
        {
            var data = await _appDbContext
                .Users
                .Include(p => p.UserRoles)
                    .ThenInclude(p => p.Role)
                .FirstOrDefaultAsync(p => p.UserId == id);

            return Ok(data);
        }


        [HttpPost("users")]
        public async Task<IActionResult> AddUser([FromBody]AddUserInfo info)
        {
            var userId = Guid.NewGuid().ToString();

            var data = new User
            {
                UserId = userId,
                UserName = info.UserName,
                Password = info.Password,
                FirstName = info.FirstName,
                MiddleName = info.MiddleName,
                LastName = info.LastName,
                Email = info.Email,
                Phone = info.Email,
                Mobile = info.Mobile,
                UserRoles = new List<UserRole>(new[] { new UserRole { UserId = userId, RoleId = info.RoleId } })
            };

            await _appDbContext.AddAsync(data);
            await _appDbContext.SaveChangesAsync();

            return Created($"api/administrator/users{userId}", data);
        }

        [HttpPost("users/edit")]
        public async Task<IActionResult> Edit([FromBody]EditUserInfo info)
        {
            var data = await _appDbContext
                .Users
                .Include(p=>p.UserRoles)
                .FirstOrDefaultAsync(p => p.UserId == info.UserId);

            if (data == null)
            {
                return NotFound();
            }

            data.FirstName = info.FirstName;
            data.MiddleName = info.MiddleName;
            data.LastName = info.LastName;

            data.Email = info.Email;
            data.Phone = info.Phone;
            data.Mobile = info.Mobile;

            //  remove all roles
            _appDbContext.UserRoles.RemoveRange(data.UserRoles);

            //  add new
            await _appDbContext.AddAsync(new UserRole { UserId = info.UserId, RoleId = info.RoleId });

            await _appDbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpPost("users/{userId}/addRole/{roleId}")]
        public async Task<IActionResult> AddUserRole(string userId, string roleId)
        {
            var user = await _appDbContext
                .Users
                .FirstOrDefaultAsync(p => p.UserId == userId);

            if (user == null)
            {
                return BadRequest("user not found");
            }

            var role = await _appDbContext
                .Roles
                .FirstOrDefaultAsync(p => p.RoleId == roleId);

            if (role == null)
            {
                return BadRequest("role not found");
            }

            var userRole = new UserRole { UserId = userId, RoleId = roleId };

            await _appDbContext.AddAsync(userRole);

            await _appDbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpPost("users/{userId}removeRole/{roleId}")]
        public async Task<IActionResult> RemoveUserRole(string userId, string roleId)
        {
            var userRole = await _appDbContext
                .UserRoles
                .FirstOrDefaultAsync(p => p.UserId == userId && p.RoleId == roleId);

            if (userRole == null)
            {
                return NotFound();
            }

            _appDbContext.Remove(userRole);

            await _appDbContext.SaveChangesAsync();

            return Ok();
        }

        #endregion


        #region FORM Nutrition and EPI

        [HttpGet("forms/nepis")]
        public async Task<IActionResult> GetNEPIs()
        {
            var data = await _appDbContext
                .TCL_NEPIs
                .Include(p => p.Entries)
                .Include(p => p.User)
                .ToListAsync();

            return Ok(data);
        }

        [HttpGet("forms/nepis/{id}")]
        public async Task<IActionResult> GetNEPI(string id)
        {
            var data = await _appDbContext
                .TCL_NEPIs
                .Include(p => p.Entries)
                .Include(p => p.User)
                .FirstOrDefaultAsync(p => p.TCL_NEPIId == id);

            return Ok(data);
        }

        #endregion

        #region FORM Family Planning

        [HttpGet("forms/fps")]
        public async Task<IActionResult> GetFPs()
        {
            var data = await _appDbContext
                .TCL_FPs
                .Include(p => p.Entries)
                .Include(p => p.User)
                .ToListAsync();

            return Ok(data);
        }

        [HttpGet("forms/fps/{id}")]
        public async Task<IActionResult> GetFp(string id)
        {
            var data = await _appDbContext
                .TCL_FPs
                .Include(p => p.Entries)
                .Include(p => p.User)
                .FirstOrDefaultAsync(p => p.TCL_FPId == id);

            return Ok(data);
        }

        #endregion

        #region FORM Prenatal Care

        [HttpGet("forms/pncs")]
        public async Task<IActionResult> GetPNCs()
        {
            var data = await _appDbContext
                .TCL_PNCs
                .Include(p => p.Entries)
                .Include(p => p.User)
                .ToListAsync();

            return Ok(data);
        }

        [HttpGet("forms/pncs/{id}")]
        public async Task<IActionResult> GetPNC(string id)
        {
            var data = await _appDbContext
                .TCL_PNCs
                .Include(p => p.Entries)
                .Include(p => p.User)
                .FirstOrDefaultAsync(p => p.TCL_PNCId == id);

            return Ok(data);
        }

        #endregion


        #region Dashboard

        [HttpGet("dashboard")]
        public async Task<IActionResult> Dashboard()
        {
            var fps = await _appDbContext.TCL_FPs.Include(p => p.Entries).ToListAsync();
            var nepis = await _appDbContext.TCL_NEPIs.Include(p => p.Entries).ToListAsync();
            var pncs = await _appDbContext.TCL_PNCs.Include(p => p.Entries).ToListAsync();

            var dashboard = new DashboardInfo
            {
                FpCount = fps.Count(),
                FpEntryCount = fps.Sum(p => p.Entries.Count()),

                NepiCount = nepis.Count(),
                NepiEntryCount = nepis.Sum(p => p.Entries.Count()),

                PncCount = pncs.Count(),
                PncEntryCount = pncs.Sum(p => p.Entries.Count()),

                LastestFpId = fps.OrderByDescending(p=>p.LastUploaded).FirstOrDefault().TCL_FPId,

                LastestNepiId = nepis.OrderByDescending(p => p.LastUploaded).FirstOrDefault().TCL_NEPIId,

                LastestPncId = pncs.OrderByDescending(p => p.LastUploaded).FirstOrDefault().TCL_PNCId,
                
            };

            return Ok(dashboard);
        }
        #endregion
    }

    public class AddUserInfo
    {
        public string UserName { get; set; }
        public string Password { get; set; }

        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }

        public string Email { get; set; }
        public string Phone { get; set; }
        public string Mobile { get; set; }

        public string RoleId { get; set; }
    }

    public class EditUserInfo
    {
        public string UserId { get; set; }

        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }

        public string Email { get; set; }
        public string Phone { get; set; }
        public string Mobile { get; set; }

        public string RoleId { get; set; }

    }


    public class DashboardInfo
    {
        public int FpCount { get; set; }
        public int FpEntryCount { get; set; }

        public int NepiCount { get; set; }
        public int NepiEntryCount { get; set; }

        public int PncCount { get; set; }
        public int PncEntryCount { get; set; }

        public string LastestFpId { get; set; }
        public string LastestFpEntryId { get; set; }

        public string LastestNepiId { get; set; }
        public string LastestNepiEntryId { get; set; }

        public string LastestPncId { get; set; }
        public string LastestPncEntryId { get; set; }
    }
}
