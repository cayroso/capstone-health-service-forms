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
    public class NepiController : Controller
    {
        private readonly AppDbContext _appDbContext;

        public NepiController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("forms/{id}")]
        public async Task<IActionResult> GetForms(string id)
        {
            var data = await _appDbContext
                .TCL_NEPIs
                .Include(p => p.Entries)
                .Include(p => p.User)
                .FirstOrDefaultAsync(p => p.TCL_NEPIId == id);

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
                .TCL_NEPIs
                .Include(p => p.Entries)
                .Include(p => p.User)
                .ToListAsync();

            return Ok(data);
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

        [HttpPost("uploadAll")]
        public async Task<IActionResult> UploadAll([FromBody]UploadForm1Info info)
        {
            try
            {
                var items = info.Items;

                foreach (var item in items)
                {
                    var frm = await _appDbContext.TCL_NEPIs.FirstOrDefaultAsync(p => p.TCL_NEPIId == item.TCL_NEPIId);

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
                        var foo = await _appDbContext.TCL_NEPI_Entries.FirstOrDefaultAsync(p => p.TCL_NEPI_EntryId == entry.TCL_NEPI_EntryId);

                        if (foo == null)
                        {
                            _appDbContext.Add(entry);
                        }
                        else
                        {
                            foo.Address = entry.Address;
                            foo.BCG = entry.BCG;
                            foo.ChildExclusiveBreastFeed1 = entry.ChildExclusiveBreastFeed1;
                            foo.ChildExclusiveBreastFeed2 = entry.ChildExclusiveBreastFeed2;
                            foo.ChildExclusiveBreastFeed3 = entry.ChildExclusiveBreastFeed3;
                            foo.ChildExclusiveBreastFeed4 = entry.ChildExclusiveBreastFeed4;
                            foo.ChildExclusiveBreastFeed5 = entry.ChildExclusiveBreastFeed5;
                            foo.ChildExclusiveBreastFeed6 = entry.ChildExclusiveBreastFeed6;

                            foo.ComplimentaryFeeding6 = entry.ComplimentaryFeeding6;
                            foo.ComplimentaryFeeding7 = entry.ComplimentaryFeeding7;
                            foo.ComplimentaryFeeding8 = entry.ComplimentaryFeeding8;

                            foo.CPABTTAssessed = entry.CPABTTAssessed;
                            foo.CPABTTStatus = entry.CPABTTStatus;

                            foo.DateFullyImmunizedChild = entry.DateFullyImmunizedChild;
                            foo.DateNewbornScreeningDone = entry.DateNewbornScreeningDone;
                            foo.DateNewbornScreeningReferral = entry.DateNewbornScreeningReferral;

                            foo.DateOfBirth = entry.DateOfBirth;
                            foo.DateOfRegistration = entry.DateOfRegistration;
                            foo.Deworming = entry.Deworming;
                            foo.FamilySerialNumber = entry.FamilySerialNumber;
                            foo.Gender = entry.Gender;

                            foo.Height = entry.Height;
                            foo.HepaB1MoreThan24hrs = entry.HepaB1MoreThan24hrs;
                            foo.HepaB1Within24hrs = entry.HepaB1Within24hrs;

                            foo.IPV = entry.IPV;
                            foo.IronA1 = entry.IronA1;
                            foo.IronA2 = entry.IronA2;

                            foo.MCV1 = entry.MCV1;
                            foo.MCV2 = entry.MCV2;
                            foo.MNP1 = entry.MNP1;
                            foo.MNP2 = entry.MNP2;

                            foo.NameOfChild = entry.NameOfChild;
                            foo.NameOfMother = entry.NameOfMother;

                            foo.NHTS = entry.NHTS;
                            foo.OPV1 = entry.OPV1;
                            foo.OPV2 = entry.OPV2;
                            foo.OPV3 = entry.OPV3;

                            foo.PCV1 = entry.PCV1;
                            foo.PCV2 = entry.PCV2;
                            foo.PCV3 = entry.PCV3;

                            foo.Pentavalent1 = entry.Pentavalent1;
                            foo.Pentavalent2 = entry.Pentavalent2;
                            foo.Pentavalent3 = entry.Pentavalent3;

                            foo.Remarks = entry.Remarks;

                            foo.RotaVirusVaccine1 = entry.RotaVirusVaccine1;
                            foo.RotaVirusVaccine2 = entry.RotaVirusVaccine2;

                            foo.VitaminA1 = entry.VitaminA1;
                            foo.VitaminA2 = entry.VitaminA2;
                            foo.VitaminA3 = entry.VitaminA3;

                            foo.Weight = entry.Weight;


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
        public async Task<IActionResult> Upload([FromBody]TCL_NEPI info)
        {
            try
            {
                var frm = await _appDbContext.TCL_NEPIs.FirstOrDefaultAsync(p => p.TCL_NEPIId == info.TCL_NEPIId);

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
                    var foo = await _appDbContext.TCL_NEPI_Entries.FirstOrDefaultAsync(p => p.TCL_NEPI_EntryId == entry.TCL_NEPI_EntryId);

                    if (foo == null)
                    {
                        _appDbContext.Add(entry);
                    }
                    else
                    {
                        foo.Address = entry.Address;
                        foo.BCG = entry.BCG;
                        foo.ChildExclusiveBreastFeed1 = entry.ChildExclusiveBreastFeed1;
                        foo.ChildExclusiveBreastFeed2 = entry.ChildExclusiveBreastFeed2;
                        foo.ChildExclusiveBreastFeed3 = entry.ChildExclusiveBreastFeed3;
                        foo.ChildExclusiveBreastFeed4 = entry.ChildExclusiveBreastFeed4;
                        foo.ChildExclusiveBreastFeed5 = entry.ChildExclusiveBreastFeed5;
                        foo.ChildExclusiveBreastFeed6 = entry.ChildExclusiveBreastFeed6;

                        foo.ComplimentaryFeeding6 = entry.ComplimentaryFeeding6;
                        foo.ComplimentaryFeeding7 = entry.ComplimentaryFeeding7;
                        foo.ComplimentaryFeeding8 = entry.ComplimentaryFeeding8;

                        foo.CPABTTAssessed = entry.CPABTTAssessed;
                        foo.CPABTTStatus = entry.CPABTTStatus;

                        foo.DateFullyImmunizedChild = entry.DateFullyImmunizedChild;
                        foo.DateNewbornScreeningDone = entry.DateNewbornScreeningDone;
                        foo.DateNewbornScreeningReferral = entry.DateNewbornScreeningReferral;

                        foo.DateOfBirth = entry.DateOfBirth;
                        foo.DateOfRegistration = entry.DateOfRegistration;
                        foo.Deworming = entry.Deworming;
                        foo.FamilySerialNumber = entry.FamilySerialNumber;
                        foo.Gender = entry.Gender;

                        foo.Height = entry.Height;
                        foo.HepaB1MoreThan24hrs = entry.HepaB1MoreThan24hrs;
                        foo.HepaB1Within24hrs = entry.HepaB1Within24hrs;

                        foo.IPV = entry.IPV;
                        foo.IronA1 = entry.IronA1;
                        foo.IronA2 = entry.IronA2;

                        foo.MCV1 = entry.MCV1;
                        foo.MCV2 = entry.MCV2;
                        foo.MNP1 = entry.MNP1;
                        foo.MNP2 = entry.MNP2;

                        foo.NameOfChild = entry.NameOfChild;
                        foo.NameOfMother = entry.NameOfMother;

                        foo.NHTS = entry.NHTS;
                        foo.OPV1 = entry.OPV1;
                        foo.OPV2 = entry.OPV2;
                        foo.OPV3 = entry.OPV3;

                        foo.PCV1 = entry.PCV1;
                        foo.PCV2 = entry.PCV2;
                        foo.PCV3 = entry.PCV3;

                        foo.Pentavalent1 = entry.Pentavalent1;
                        foo.Pentavalent2 = entry.Pentavalent2;
                        foo.Pentavalent3 = entry.Pentavalent3;

                        foo.Remarks = entry.Remarks;

                        foo.RotaVirusVaccine1 = entry.RotaVirusVaccine1;
                        foo.RotaVirusVaccine2 = entry.RotaVirusVaccine2;

                        foo.VitaminA1 = entry.VitaminA1;
                        foo.VitaminA2 = entry.VitaminA2;
                        foo.VitaminA3 = entry.VitaminA3;

                        foo.Weight = entry.Weight;
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
            public List<TCL_NEPI> Items { get; set; }
        }
    }
}
