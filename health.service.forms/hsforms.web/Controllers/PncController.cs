using hsforms.web.Data;
using hsforms.web.Services;
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
    public class PncController : Controller
    {
        private readonly AppDbContext _appDbContext;

        public PncController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("forms/{id}/export")]
        public async Task<IActionResult> ExportForm(string id)
        {
            var svc = new ExportToExcelService(_appDbContext);

            var stream = await svc.ConvertPncToPdfAsync(id);

            stream.Seek(0, System.IO.SeekOrigin.Begin);

            return new FileStreamResult(stream, "application/xls") { FileDownloadName = $"Prenatal Care: {id}.xlsx" };
        }

        [HttpGet("forms/{id}")]
        public async Task<IActionResult> GetForms(string id)
        {
            var data = await _appDbContext
                .TCL_PNCs
                .Include(p => p.Entries)
                .Include(p => p.User)
                .FirstOrDefaultAsync(p => p.TCL_PNCId == id);

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
                .TCL_PNCs
                .Include(p => p.Entries)
                .Include(p => p.User)
                .ToListAsync();

            return Ok(data);
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddForm([FromBody]AddFormInfo info)
        {
            var form = new TCL_PNC
            {
                TCL_PNCId = Guid.NewGuid().ToString().ToLower(),
                Barangay = info.Barangay,
                Municipality = info.Municipality,
                Province = info.Province,
                Region = info.Region,
                UserId = User.FindFirst(ClaimTypes.NameIdentifier).Value,
            };

            await _appDbContext.AddAsync(form);

            await _appDbContext.SaveChangesAsync();

            return Ok(form.TCL_PNCId);
        }

        [HttpPost("edit")]
        public async Task<IActionResult> EditForm([FromBody]EditFormInfo info)
        {
            var form = await _appDbContext
                .TCL_PNCs
                .FirstOrDefaultAsync(p => p.TCL_PNCId == info.FormId);

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

        [HttpPost("remove")]
        public async Task<IActionResult> RemoveForm(string id)
        {
            var data = await _appDbContext.TCL_PNCs.Include(p => p.Entries).FirstOrDefaultAsync(p => p.TCL_PNCId == id);

            _appDbContext.Remove(data);

            await _appDbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpPost("entry/add")]
        public async Task<IActionResult> AddEntry([FromBody] TCL_PNC_Entry entry)
        {

            await _appDbContext.AddAsync(entry);

            await _appDbContext.SaveChangesAsync();

            return Ok(entry.TCL_PNC_EntryId);
        }

        [HttpPost("entry/edit")]
        public async Task<IActionResult> EditEntry([FromBody] TCL_PNC_Entry entry)
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
                .TCL_PNC_Entries
                .FirstOrDefaultAsync(p => p.TCL_PNC_EntryId == id);

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
                    var frm = await _appDbContext.TCL_PNCs.FirstOrDefaultAsync(p => p.TCL_PNCId == item.TCL_PNCId);

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
                        var foo = await _appDbContext.TCL_PNC_Entries.FirstOrDefaultAsync(p => p.TCL_PNC_EntryId == entry.TCL_PNC_EntryId);

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
                            foo.Age = entry.Age;
                            foo.LMPDate = entry.LMPDate;
                            foo.LMPGP = entry.LMPGP;
                            foo.EDC = entry.EDC;

                            foo.PrenatalVisitTrimester1 = entry.PrenatalVisitTrimester1;
                            foo.PrenatalVisitTrimester2 = entry.PrenatalVisitTrimester2;
                            foo.PrenatalVisitTrimester3 = entry.PrenatalVisitTrimester3;

                            foo.TetanusStatus = entry.TetanusStatus;

                            foo.DateTetanusToxiodVaccine1 = entry.DateTetanusToxiodVaccine1;
                            foo.DateTetanusToxiodVaccine2 = entry.DateTetanusToxiodVaccine2;
                            foo.DateTetanusToxiodVaccine3 = entry.DateTetanusToxiodVaccine3;
                            foo.DateTetanusToxiodVaccine4 = entry.DateTetanusToxiodVaccine4;
                            foo.DateTetanusToxiodVaccine5 = entry.DateTetanusToxiodVaccine5;

                            foo.IronWithFolicDateGiven1 = entry.IronWithFolicDateGiven1;
                            foo.IronWithFolicNumberGiven1 = entry.IronWithFolicNumberGiven1;

                            foo.IronWithFolicDateGiven2 = entry.IronWithFolicDateGiven2;
                            foo.IronWithFolicNumberGiven2 = entry.IronWithFolicNumberGiven2;

                            foo.IronWithFolicDateGiven3 = entry.IronWithFolicDateGiven3;
                            foo.IronWithFolicNumberGiven3 = entry.IronWithFolicNumberGiven3;

                            foo.IronWithFolicDateGiven4 = entry.IronWithFolicDateGiven4;
                            foo.IronWithFolicNumberGiven4 = entry.IronWithFolicNumberGiven4;

                            foo.IronWithFolicDateGiven5 = entry.IronWithFolicDateGiven5;
                            foo.IronWithFolicNumberGiven5 = entry.IronWithFolicNumberGiven5;

                            foo.IronWithFolicDateGiven6 = entry.IronWithFolicDateGiven6;
                            foo.IronWithFolicNumberGiven6 = entry.IronWithFolicNumberGiven6;

                            foo.DateSTITested = entry.DateSTITested;
                            foo.DateSTIResult = entry.DateSTIResult;
                            foo.DateSTIPenicillin = entry.DateSTIPenicillin;

                            foo.PregnancyDateTerminated = entry.PregnancyDateTerminated;
                            foo.PregnancyOutcome = entry.PregnancyOutcome;
                            foo.PregnancyGender = entry.PregnancyGender;

                            foo.BirthWeight = entry.BirthWeight;
                            foo.PlaceOfHealthFacility = entry.PlaceOfHealthFacility;
                            foo.PlaceOfNIO = entry.PlaceOfNIO;
                            foo.AttendedBy = entry.AttendedBy;

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
        public async Task<IActionResult> Upload([FromBody]TCL_PNC info)
        {
            try
            {
                var frm = await _appDbContext.TCL_PNCs.FirstOrDefaultAsync(p => p.TCL_PNCId == info.TCL_PNCId);

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
                    var foo = await _appDbContext.TCL_PNC_Entries.FirstOrDefaultAsync(p => p.TCL_PNC_EntryId == entry.TCL_PNC_EntryId);

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
                        foo.Age = entry.Age;
                        foo.LMPDate = entry.LMPDate;
                        foo.LMPGP = entry.LMPGP;
                        foo.EDC = entry.EDC;

                        foo.PrenatalVisitTrimester1 = entry.PrenatalVisitTrimester1;
                        foo.PrenatalVisitTrimester2 = entry.PrenatalVisitTrimester2;
                        foo.PrenatalVisitTrimester3 = entry.PrenatalVisitTrimester3;

                        foo.TetanusStatus = entry.TetanusStatus;

                        foo.DateTetanusToxiodVaccine1 = entry.DateTetanusToxiodVaccine1;
                        foo.DateTetanusToxiodVaccine2 = entry.DateTetanusToxiodVaccine2;
                        foo.DateTetanusToxiodVaccine3 = entry.DateTetanusToxiodVaccine3;
                        foo.DateTetanusToxiodVaccine4 = entry.DateTetanusToxiodVaccine4;
                        foo.DateTetanusToxiodVaccine5 = entry.DateTetanusToxiodVaccine5;

                        foo.IronWithFolicDateGiven1 = entry.IronWithFolicDateGiven1;
                        foo.IronWithFolicNumberGiven1 = entry.IronWithFolicNumberGiven1;

                        foo.IronWithFolicDateGiven2 = entry.IronWithFolicDateGiven2;
                        foo.IronWithFolicNumberGiven2 = entry.IronWithFolicNumberGiven2;

                        foo.IronWithFolicDateGiven3 = entry.IronWithFolicDateGiven3;
                        foo.IronWithFolicNumberGiven3 = entry.IronWithFolicNumberGiven3;

                        foo.IronWithFolicDateGiven4 = entry.IronWithFolicDateGiven4;
                        foo.IronWithFolicNumberGiven4 = entry.IronWithFolicNumberGiven4;

                        foo.IronWithFolicDateGiven5 = entry.IronWithFolicDateGiven5;
                        foo.IronWithFolicNumberGiven5 = entry.IronWithFolicNumberGiven5;

                        foo.IronWithFolicDateGiven6 = entry.IronWithFolicDateGiven6;
                        foo.IronWithFolicNumberGiven6 = entry.IronWithFolicNumberGiven6;

                        foo.DateSTITested = entry.DateSTITested;
                        foo.DateSTIResult = entry.DateSTIResult;
                        foo.DateSTIPenicillin = entry.DateSTIPenicillin;

                        foo.PregnancyDateTerminated = entry.PregnancyDateTerminated;
                        foo.PregnancyOutcome = entry.PregnancyOutcome;
                        foo.PregnancyGender = entry.PregnancyGender;

                        foo.BirthWeight = entry.BirthWeight;
                        foo.PlaceOfHealthFacility = entry.PlaceOfHealthFacility;
                        foo.PlaceOfNIO = entry.PlaceOfNIO;
                        foo.AttendedBy = entry.AttendedBy;

                        foo.Remarks = entry.Remarks;

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
            public List<TCL_PNC> Items { get; set; }
        }
    }
}
