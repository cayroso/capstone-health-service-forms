using hsforms.web.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace hsforms.web.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly AppDbContext _appDbContext;

        public AccountController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("ping")]
        public async Task<IActionResult> Ping()
        {
            return Ok();
        }

        [HttpGet("exists/username/{username}/password/{password}")]
        public async Task<IActionResult> Exists(string username, string password)
        {
            var data = await _appDbContext
                .Users
                .FirstOrDefaultAsync(p => p.UserName == username && p.Password == password);

            if (data == null)
            {
                return NotFound();
            }

            return Ok(data);

        }

        [HttpGet("info")]
        public async Task<IActionResult> Info()
        {
            if (User.Identity.IsAuthenticated)
            {
                var data = await _appDbContext
                    .Users
                    .Include(p => p.UserRoles)
                    .FirstOrDefaultAsync(p => p.UserId == User.FindFirst(ClaimTypes.NameIdentifier).Value);

                if (data == null)
                {
                    return NotFound();
                }


                return Ok(new
                {
                    User = data,
                    IsAdmin = User.IsInRole(AppRoles.Administrator),
                    IsMidWife = User.IsInRole(AppRoles.MidWife),
                    IsHealthWorker = User.IsInRole(AppRoles.HealthWorker)
                });
            }

            return Unauthorized();
        }
        

        [HttpGet("checkUser")]
        public async Task<IActionResult> CheckUser(string userName, string email)
        {
            var data1 = await _appDbContext.Users.FirstOrDefaultAsync(p => p.UserName == userName);
            var data2 = await _appDbContext.Users.FirstOrDefaultAsync(p => p.Email == email);

            return Ok(new
            {
                UserNameOk = data1 == null,
                EmailOk = data2 == null
            });
            
        }

        [HttpPost("addUser")]
        public async Task<IActionResult> AddUser([FromBody]CreateUserInfo vm)
        {
            var user = new User
            {
                UserId = Guid.NewGuid().ToString(),
                UserName = vm.UserName,
                Password = vm.Password,
                FirstName = vm.FirstName,
                MiddleName = vm.MiddleName,
                LastName = vm.LastName,
                Email = vm.Email,
                Phone = vm.Phone,
                Mobile = vm.Mobile
            };

            var userRole = new UserRole
            {
                UserId = user.UserId,
                RoleId = vm.RoleId
            };


            await _appDbContext.AddRangeAsync(user, userRole);
            await _appDbContext.SaveChangesAsync();

            return Ok();
        }

        public class CreateUserInfo
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
    }
}
