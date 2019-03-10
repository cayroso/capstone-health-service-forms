using hsforms.web.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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
    }
}
