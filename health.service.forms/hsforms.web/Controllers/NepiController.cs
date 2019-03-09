using hsforms.web.Data;
using Microsoft.AspNetCore.Authorization;
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
    [Authorize]
    public class NepiController : Controller
    {
        private readonly AppDbContext _appDbContext;

        public NepiController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddForm([FromBody]AddFormInfo info)
        {
            var form = new TCL_NEPI
            {
                TCL_NEPIId = Guid.NewGuid().ToString().ToLower(),
                Barangay = info.Barangay,
                Municipality = info.Municipality,
                Province = info.Province,
                Region = info.Region,
                UserId = User.FindFirst(ClaimTypes.NameIdentifier).Value,
            };

            await _appDbContext.AddAsync(form);

            await _appDbContext.SaveChangesAsync();

            return Ok(form.TCL_NEPIId);
        }

        [HttpPost("edit")]
        public async Task<IActionResult> EditForm([FromBody]EditFormInfo info)
        {
            var form = await _appDbContext
                .TCL_NEPIs
                .FirstOrDefaultAsync(p => p.TCL_NEPIId == info.FormId);

            if (form == null)
            {
                return NotFound();
            }

            form.Barangay = info.Barangay;
            form.Municipality = info.Municipality;
            form.Province = info.Province;
            form.Region = info.Region;

            _appDbContext.Update(form);

            await _appDbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpPost("entry/add")]
        public async Task<IActionResult> AddEntry([FromBody] TCL_NEPI_Entry entry)
        {

            await _appDbContext.AddAsync(entry);

            await _appDbContext.SaveChangesAsync();

            return Ok(entry.TCL_NEPI_EntryId);
        }

        [HttpPost("entry/edit")]
        public async Task<IActionResult> EditEntry([FromBody] TCL_NEPI_Entry entry)
        {
            _appDbContext.Attach(entry);

            _appDbContext.Update(entry);

            await _appDbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpPost("entry/{id}/delete")]
        public async Task<IActionResult> DeleteEntry(string id)
        {
            var entry = await _appDbContext
                .TCL_NEPI_Entries
                .FirstOrDefaultAsync(p => p.TCL_NEPI_EntryId == id);

            if (entry == null)
            {
                return NotFound();
            }

            _appDbContext.Remove(entry);

            await _appDbContext.SaveChangesAsync();

            return Ok();
        }

        public class AddFormInfo
        {
            public string Barangay { get; set; }
            public string Municipality { get; set; }
            public string Province { get; set; }
            public string Region { get; set; }
        }

        public class EditFormInfo : AddFormInfo
        {
            public string FormId { get; set; }
        }
    }
}
