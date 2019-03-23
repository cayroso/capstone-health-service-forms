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
    //[Authorize]
    public class FpController : Controller
    {
        private readonly AppDbContext _appDbContext;

        public FpController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("forms/{id}")]
        public async Task<IActionResult> GetForms(string id)
        {
            var data = await _appDbContext
                .TCL_FPs
                .Include(p => p.Entries)
                .Include(p => p.User)
                .FirstOrDefaultAsync(p => p.TCL_FPId == id);

            if (data == null)
            {
                return NotFound();
            }

            return Ok(data);
        }

        [HttpGet("forms")]
        public async Task<IActionResult> GetForms()
        {
            var data = await _appDbContext
                .TCL_FPs
                .Include(p => p.Entries)
                .Include(p => p.User)
                .ToListAsync();

            return Ok(data);
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddForm([FromBody]AddFormInfo info)
        {
            var form = new TCL_FP
            {
                TCL_FPId = Guid.NewGuid().ToString().ToLower(),
                Barangay = info.Barangay,
                Municipality = info.Municipality,
                Province = info.Province,
                Region = info.Region,
                UserId = User.FindFirst(ClaimTypes.NameIdentifier).Value,
            };

            await _appDbContext.AddAsync(form);

            await _appDbContext.SaveChangesAsync();

            return Ok(form.TCL_FPId);
        }

        [HttpPost("edit")]
        public async Task<IActionResult> EditForm([FromBody]EditFormInfo info)
        {
            var form = await _appDbContext
                .TCL_FPs
                .FirstOrDefaultAsync(p => p.TCL_FPId == info.FormId);

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
        public async Task<IActionResult> AddEntry([FromBody] TCL_FP_Entry entry)
        {

            await _appDbContext.AddAsync(entry);

            await _appDbContext.SaveChangesAsync();

            return Ok(entry.TCL_FP_EntryId);
        }

        [HttpPost("entry/edit")]
        public async Task<IActionResult> EditEntry([FromBody] TCL_FP_Entry entry)
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
                .TCL_FP_Entries
                .FirstOrDefaultAsync(p => p.TCL_FP_EntryId == id);

            if (entry == null)
            {
                return NotFound();
            }

            _appDbContext.Remove(entry);

            await _appDbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpPost("uploadAll")]
        public async Task<IActionResult> UploadAll([FromBody]UploadForm1Info info)
        {
            try
            {
                var items = info.Items;

                foreach (var item in items)
                {
                    var frm = await _appDbContext.TCL_FPs.FirstOrDefaultAsync(p => p.TCL_FPId == item.TCL_FPId);

                    if (frm == null)
                    {
                        if(item.LastUploaded == null)
                        {
                            item.LastUploaded = DateTime.UtcNow;
                        }

                        _appDbContext.Add(item);
                    }
                    else
                    {
                        frm.Barangay = item.Barangay;
                        frm.Municipality = item.Municipality;
                        frm.Province = item.Province;
                        frm.Region = item.Region;
                        frm.LastUploaded = DateTime.UtcNow;
                    }

                    foreach (var entry in item.Entries)
                    {
                        var foo = await _appDbContext.TCL_FP_Entries.FirstOrDefaultAsync(p => p.TCL_FP_EntryId == entry.TCL_FP_EntryId);

                        if (foo == null)
                        {
                            _appDbContext.Add(entry);
                        }
                        else
                        {
                            foo.DateOfRegistration = entry.DateOfRegistration;
                            foo.FamilySerialNumber = entry.FamilySerialNumber;
                            foo.Name = entry.Name;
                            foo.Address = entry.Address;

                            foo.BirthDate = entry.BirthDate;

                            foo.TypeOfClient = entry.TypeOfClient;

                            foo.PresentMethod = entry.PresentMethod;
                            foo.PreviousMethod = entry.PreviousMethod;

                            foo.DateNextService1 = entry.DateNextService1;
                            foo.DateAccomplishedService1 = entry.DateAccomplishedService1;

                            foo.DateNextService2 = entry.DateNextService2;
                            foo.DateAccomplishedService2 = entry.DateAccomplishedService2;

                            foo.DateNextService3 = entry.DateNextService3;
                            foo.DateAccomplishedService3 = entry.DateAccomplishedService3;

                            foo.DateNextService4 = entry.DateNextService4;
                            foo.DateAccomplishedService4 = entry.DateAccomplishedService4;

                            foo.DateNextService5 = entry.DateNextService5;
                            foo.DateAccomplishedService5 = entry.DateAccomplishedService5;

                            foo.DateNextService6 = entry.DateNextService6;
                            foo.DateAccomplishedService6 = entry.DateAccomplishedService6;

                            foo.DateNextService7 = entry.DateNextService7;
                            foo.DateAccomplishedService7 = entry.DateAccomplishedService7;

                            foo.DateNextService8 = entry.DateNextService8;
                            foo.DateAccomplishedService8 = entry.DateAccomplishedService8;

                            foo.DateNextService9 = entry.DateNextService9;
                            foo.DateAccomplishedService9 = entry.DateAccomplishedService9;

                            foo.DateNextService10 = entry.DateNextService10;
                            foo.DateAccomplishedService10 = entry.DateAccomplishedService10;

                            foo.DateNextService11 = entry.DateNextService11;
                            foo.DateAccomplishedService11 = entry.DateAccomplishedService11;

                            foo.DateNextService12 = entry.DateNextService12;
                            foo.DateAccomplishedService12 = entry.DateAccomplishedService12;

                            foo.DropoutDate = entry.DropoutDate;
                            foo.DropoutReason = entry.DropoutReason;

                            foo.Remarks = entry.Remarks;
                        }
                    }
                }

                await _appDbContext.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("upload")]
        public async Task<IActionResult> Upload([FromBody]TCL_FP info)
        {
            try
            {
                var frm = await _appDbContext.TCL_FPs.FirstOrDefaultAsync(p => p.TCL_FPId == info.TCL_FPId);

                if (frm == null)
                {
                    if(info.LastUploaded == null)
                    {
                        info.LastUploaded = DateTime.UtcNow;
                    }

                    _appDbContext.Add(info);
                }
                else
                {
                    
                    frm.Barangay = info.Barangay;
                    frm.Municipality = info.Municipality;
                    frm.Province = info.Province;
                    frm.Region = info.Region;
                    frm.LastUploaded = DateTime.UtcNow;
                }

                foreach (var entry in info.Entries)
                {
                    var foo = await _appDbContext.TCL_FP_Entries.FirstOrDefaultAsync(p => p.TCL_FP_EntryId == entry.TCL_FP_EntryId);

                    if (foo == null)
                    {
                        _appDbContext.Add(entry);
                    }
                    else
                    {
                        foo.DateOfRegistration = entry.DateOfRegistration;
                        foo.FamilySerialNumber = entry.FamilySerialNumber;
                        foo.Name = entry.Name;
                        foo.Address = entry.Address;

                        foo.BirthDate = entry.BirthDate;

                        foo.TypeOfClient = entry.TypeOfClient;

                        foo.PresentMethod = entry.PresentMethod;
                        foo.PreviousMethod = entry.PreviousMethod;

                        foo.DateNextService1 = entry.DateNextService1;
                        foo.DateAccomplishedService1 = entry.DateAccomplishedService1;

                        foo.DateNextService2 = entry.DateNextService2;
                        foo.DateAccomplishedService2 = entry.DateAccomplishedService2;

                        foo.DateNextService3 = entry.DateNextService3;
                        foo.DateAccomplishedService3 = entry.DateAccomplishedService3;

                        foo.DateNextService4 = entry.DateNextService4;
                        foo.DateAccomplishedService4 = entry.DateAccomplishedService4;

                        foo.DateNextService5 = entry.DateNextService5;
                        foo.DateAccomplishedService5 = entry.DateAccomplishedService5;

                        foo.DateNextService6 = entry.DateNextService6;
                        foo.DateAccomplishedService6 = entry.DateAccomplishedService6;

                        foo.DateNextService7 = entry.DateNextService7;
                        foo.DateAccomplishedService7 = entry.DateAccomplishedService7;

                        foo.DateNextService8 = entry.DateNextService8;
                        foo.DateAccomplishedService8 = entry.DateAccomplishedService8;

                        foo.DateNextService9 = entry.DateNextService9;
                        foo.DateAccomplishedService9 = entry.DateAccomplishedService9;

                        foo.DateNextService10 = entry.DateNextService10;
                        foo.DateAccomplishedService10 = entry.DateAccomplishedService10;

                        foo.DateNextService11 = entry.DateNextService11;
                        foo.DateAccomplishedService11 = entry.DateAccomplishedService11;

                        foo.DateNextService12 = entry.DateNextService12;
                        foo.DateAccomplishedService12 = entry.DateAccomplishedService12;

                        foo.DropoutDate = entry.DropoutDate;
                        foo.DropoutReason = entry.DropoutReason;

                        foo.Remarks = entry.Remarks;
                    }
                }


                await _appDbContext.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
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

        public class UploadForm1Info
        {
            public List<TCL_FP> Items { get; set; }
        }
    }
}
