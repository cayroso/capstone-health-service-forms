using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using hsforms.web.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace hsforms.web.Services
{
    public class ExportToExcelService
    {
        readonly AppDbContext _appDbContext;

        public ExportToExcelService(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext ?? throw new ArgumentNullException(nameof(appDbContext));

        }

        public async System.Threading.Tasks.Task<Stream> ConvertFpToPdfAsync(string formId)
        {
            var form = await _appDbContext
                .TCL_FPs
                .Include(p => p.Entries)
                .FirstOrDefaultAsync(p => p.TCL_FPId == formId);

            var fileName = @"Templates\FP_Template.xlsx";

            // Open the document for editing.
            using (SpreadsheetDocument doc =
                SpreadsheetDocument.CreateFromTemplate(fileName))//.Open(fileName, true))
            {

                var wbp = doc.WorkbookPart;
                var sheet = wbp.Workbook.Descendants<Sheet>().First();
                var wsp = (WorksheetPart)(wbp.GetPartById(sheet.Id));

                var stringTable = wbp.GetPartsOfType<SharedStringTablePart>()
                    .FirstOrDefault();


                uint row = 3;
                foreach (var entry in form.Entries)
                {
                    InsertText(entry.DateOfRegistration.ToString("MM-dd-yy"), stringTable, "A", row, wsp);
                    MergeCells($"A{row}", $"A{row + 1}", wsp.Worksheet);

                    InsertText(entry.FamilySerialNumber, stringTable, "B", row, wsp);
                    MergeCells($"B{row}", $"B{row + 1}", wsp.Worksheet);

                    InsertText(entry.Name, stringTable, "C", row, wsp);
                    MergeCells($"C{row}", $"C{row + 1}", wsp.Worksheet);

                    InsertText(entry.Address, stringTable, "D", row, wsp);
                    MergeCells($"D{row}", $"D{row + 1}", wsp.Worksheet);

                    InsertText(entry.Age.ToString(), stringTable, "E", row, wsp);
                    InsertText(entry.BirthDate.ToString("MM-dd-yy"), stringTable, "E", row + 1, wsp);

                    InsertText(entry.TypeOfClient, stringTable, "F", row, wsp);
                    MergeCells($"F{row}", $"F{row + 1}", wsp.Worksheet);

                    InsertText(entry.PresentMethod, stringTable, "G", row, wsp);
                    InsertText(entry.PreviousMethod, stringTable, "G", row + 1, wsp);

                    if (entry.DateNextService1 != null)
                        InsertText(entry.DateNextService1.Value.ToString("MM-dd-yy"), stringTable, "H", row, wsp);
                    if (entry.DateAccomplishedService1 != null)
                        InsertText(entry.DateAccomplishedService1.Value.ToString("MM-dd-yy"), stringTable, "H", row + 1, wsp);

                    if (entry.DateNextService2 != null)
                        InsertText(entry.DateNextService2.Value.ToString("MM-dd-yy"), stringTable, "I", row, wsp);
                    if (entry.DateAccomplishedService2 != null)
                        InsertText(entry.DateAccomplishedService2.Value.ToString("MM-dd-yy"), stringTable, "I", row + 1, wsp);

                    if (entry.DateNextService3 != null)
                        InsertText(entry.DateNextService3.Value.ToString("MM-dd-yy"), stringTable, "J", row, wsp);
                    if (entry.DateAccomplishedService3 != null)
                        InsertText(entry.DateAccomplishedService3.Value.ToString("MM-dd-yy"), stringTable, "J", row + 1, wsp);

                    if (entry.DateNextService4 != null)
                        InsertText(entry.DateNextService4.Value.ToString("MM-dd-yy"), stringTable, "K", row, wsp);
                    if (entry.DateAccomplishedService4 != null)
                        InsertText(entry.DateAccomplishedService4.Value.ToString("MM-dd-yy"), stringTable, "K", row + 1, wsp);

                    if (entry.DateNextService5 != null)
                        InsertText(entry.DateNextService5.Value.ToString("MM-dd-yy"), stringTable, "L", row, wsp);
                    if (entry.DateAccomplishedService5 != null)
                        InsertText(entry.DateAccomplishedService5.Value.ToString("MM-dd-yy"), stringTable, "L", row + 1, wsp);

                    if (entry.DateNextService6 != null)
                        InsertText(entry.DateNextService6.Value.ToString("MM-dd-yy"), stringTable, "M", row, wsp);
                    if (entry.DateAccomplishedService6 != null)
                        InsertText(entry.DateAccomplishedService6.Value.ToString("MM-dd-yy"), stringTable, "M", row + 1, wsp);

                    if (entry.DateNextService7 != null)
                        InsertText(entry.DateNextService7.Value.ToString("MM-dd-yy"), stringTable, "N", row, wsp);
                    if (entry.DateAccomplishedService7 != null)
                        InsertText(entry.DateAccomplishedService7.Value.ToString("MM-dd-yy"), stringTable, "N", row + 1, wsp);

                    if (entry.DateNextService8 != null)
                        InsertText(entry.DateNextService8.Value.ToString("MM-dd-yy"), stringTable, "O", row, wsp);
                    if (entry.DateAccomplishedService8 != null)
                        InsertText(entry.DateAccomplishedService8.Value.ToString("MM-dd-yy"), stringTable, "O", row + 1, wsp);

                    if (entry.DateNextService9 != null)
                        InsertText(entry.DateNextService9.Value.ToString("MM-dd-yy"), stringTable, "P", row, wsp);
                    if (entry.DateAccomplishedService9 != null)
                        InsertText(entry.DateAccomplishedService9.Value.ToString("MM-dd-yy"), stringTable, "P", row + 1, wsp);

                    if (entry.DateNextService10 != null)
                        InsertText(entry.DateNextService10.Value.ToString("MM-dd-yy"), stringTable, "Q", row, wsp);
                    if (entry.DateAccomplishedService10 != null)
                        InsertText(entry.DateAccomplishedService10.Value.ToString("MM-dd-yy"), stringTable, "Q", row + 1, wsp);
                    if (entry.DateNextService11 != null)
                        InsertText(entry.DateNextService11.Value.ToString("MM-dd-yy"), stringTable, "R", row, wsp);
                    if (entry.DateAccomplishedService11 != null)
                        InsertText(entry.DateAccomplishedService11.Value.ToString("MM-dd-yy"), stringTable, "R", row + 1, wsp);
                    if (entry.DateNextService12 != null)
                        InsertText(entry.DateNextService12.Value.ToString("MM-dd-yy"), stringTable, "S", row, wsp);
                    if (entry.DateAccomplishedService12 != null)
                        InsertText(entry.DateAccomplishedService12.Value.ToString("MM-dd-yy"), stringTable, "S", row + 1, wsp);


                    if (entry.DropoutDate != null)
                    {
                        InsertText(entry.DropoutDate.Value.ToString("MM-dd-yy"), stringTable, "T", row, wsp);
                        MergeCells($"T{row}", $"T{row + 1}", wsp.Worksheet);

                    }

                    if (!string.IsNullOrEmpty(entry.DropoutReason))
                    {
                        InsertText(entry.DropoutReason, stringTable, "U", row, wsp);
                        MergeCells($"U{row}", $"U{row + 1}", wsp.Worksheet);
                    }

                    if (!string.IsNullOrEmpty(entry.Remarks))
                    {
                        InsertText(entry.Remarks, stringTable, "V", row, wsp);
                        MergeCells($"V{row}", $"V{row + 1}", wsp.Worksheet);

                    }

                    //  ITERATEOR
                    row += 2;
                }


                var ms = new MemoryStream();
                doc.Clone(ms);

                return ms;
            }

        }

        public async System.Threading.Tasks.Task<Stream> ConvertNepiToPdfAsync(string formId)
        {
            var form = await _appDbContext
                .TCL_NEPIs
                .Include(p => p.Entries)
                .FirstOrDefaultAsync(p => p.TCL_NEPIId == formId);

            var fileName = @"Templates\NEPI_Template.xlsx";

            // Open the document for editing.
            using (SpreadsheetDocument doc =
                SpreadsheetDocument.CreateFromTemplate(fileName))//.Open(fileName, true))
            {

                var wbp = doc.WorkbookPart;
                var sheet = wbp.Workbook.Descendants<Sheet>().First();
                var wsp = (WorksheetPart)(wbp.GetPartById(sheet.Id));

                var stringTable = wbp.GetPartsOfType<SharedStringTablePart>()
                    .FirstOrDefault();


                uint row = 5;
                foreach (var entry in form.Entries)
                {
                    InsertText(entry.DateOfRegistration.Value.ToString("MM-dd-yy"), stringTable, "A", row, wsp);
                    InsertText(entry.DateOfBirth.ToString("MM-dd-yy"), stringTable, "B", row, wsp);
                    InsertText(entry.FamilySerialNumber, stringTable, "C", row, wsp);
                    InsertText(entry.NHTS, stringTable, "D", row, wsp);
                    InsertText(entry.NameOfChild, stringTable, "E", row, wsp);
                    InsertText(entry.Weight.ToString(), stringTable, "F", row, wsp);
                    InsertText(entry.Height.ToString(), stringTable, "G", row, wsp);

                    InsertText(entry.Gender, stringTable, "H", row, wsp);
                    InsertText(entry.NameOfMother, stringTable, "I", row, wsp);

                    InsertText(entry.Address, stringTable, "J", row, wsp);

                    if (entry.DateNewbornScreeningReferral != null)
                        InsertText(entry.DateNewbornScreeningReferral.Value.ToString("MM-dd-yy"), stringTable, "K", row, wsp);

                    if (entry.DateNewbornScreeningDone != null)
                        InsertText(entry.DateNewbornScreeningDone.Value.ToString("MM-dd-yy"), stringTable, "L", row, wsp);

                    InsertText(entry.CPABTTStatus, stringTable, "M", row, wsp);

                    if (entry.CPABTTAssessed != null)
                        InsertText(entry.CPABTTAssessed.Value.ToString("MM-dd-yy"), stringTable, "N", row, wsp);

                    InsertText(entry.ChildExclusiveBreastFeed1.ToString(), stringTable, "O", row, wsp);
                    InsertText(entry.ChildExclusiveBreastFeed2.ToString(), stringTable, "P", row, wsp);
                    InsertText(entry.ChildExclusiveBreastFeed3.ToString(), stringTable, "Q", row, wsp);
                    InsertText(entry.ChildExclusiveBreastFeed4.ToString(), stringTable, "R", row, wsp);
                    InsertText(entry.ChildExclusiveBreastFeed5.ToString(), stringTable, "S", row, wsp);
                    if (entry.ChildExclusiveBreastFeed6 != null)
                        InsertText(entry.ChildExclusiveBreastFeed6.Value.ToString("MM-dd-yy"), stringTable, "T", row, wsp);

                    InsertText(entry.ComplimentaryFeeding6.ToString(), stringTable, "U", row, wsp);
                    InsertText(entry.ComplimentaryFeeding7.ToString(), stringTable, "V", row, wsp);
                    InsertText(entry.ComplimentaryFeeding8.ToString(), stringTable, "W", row, wsp);

                    if (entry.BCG != null)
                        InsertText(entry.BCG.Value.ToString("MM-dd-yy"), stringTable, "X", row, wsp);

                    if (entry.HepaB1Within24hrs != null)
                        InsertText(entry.HepaB1Within24hrs.Value.ToString("MM-dd-yy"), stringTable, "Y", row, wsp);
                    if (entry.HepaB1MoreThan24hrs != null)
                        InsertText(entry.HepaB1MoreThan24hrs.Value.ToString("MM-dd-yy"), stringTable, "Z", row, wsp);


                    if (entry.Pentavalent1 != null)
                        InsertText(entry.Pentavalent1.Value.ToString("MM-dd-yy"), stringTable, "AA", row, wsp);
                    if (entry.Pentavalent2 != null)
                        InsertText(entry.Pentavalent2.Value.ToString("MM-dd-yy"), stringTable, "AB", row, wsp);
                    if (entry.Pentavalent3 != null)
                        InsertText(entry.Pentavalent3.Value.ToString("MM-dd-yy"), stringTable, "AC", row, wsp);

                    if (entry.OPV1 != null)
                        InsertText(entry.OPV1.Value.ToString("MM-dd-yy"), stringTable, "AD", row, wsp);
                    if (entry.OPV2 != null)
                        InsertText(entry.OPV2.Value.ToString("MM-dd-yy"), stringTable, "AE", row, wsp);
                    if (entry.OPV3 != null)
                        InsertText(entry.OPV3.Value.ToString("MM-dd-yy"), stringTable, "AF", row, wsp);


                    if (entry.IPV != null)
                        InsertText(entry.IPV.Value.ToString("MM-dd-yy"), stringTable, "AG", row, wsp);


                    if (entry.MCV1 != null)
                        InsertText(entry.MCV1.Value.ToString("MM-dd-yy"), stringTable, "AH", row, wsp);
                    if (entry.MCV2 != null)
                        InsertText(entry.MCV2.Value.ToString("MM-dd-yy"), stringTable, "AI", row, wsp);

                    if (entry.DateFullyImmunizedChild != null)
                        InsertText(entry.DateFullyImmunizedChild.Value.ToString("MM-dd-yy"), stringTable, "AJ", row, wsp);

                    if (entry.RotaVirusVaccine1 != null)
                        InsertText(entry.RotaVirusVaccine1.Value.ToString("MM-dd-yy"), stringTable, "AK", row, wsp);
                    if (entry.RotaVirusVaccine2 != null)
                        InsertText(entry.RotaVirusVaccine2.Value.ToString("MM-dd-yy"), stringTable, "AL", row, wsp);

                    if (entry.PCV1 != null)
                        InsertText(entry.PCV1.Value.ToString("MM-dd-yy"), stringTable, "AM", row, wsp);
                    if (entry.PCV2 != null)
                        InsertText(entry.PCV2.Value.ToString("MM-dd-yy"), stringTable, "AN", row, wsp);
                    if (entry.PCV3 != null)
                        InsertText(entry.PCV3.Value.ToString("MM-dd-yy"), stringTable, "AO", row, wsp);


                    InsertText(entry.VitaminA1.ToString(), stringTable, "AP", row, wsp);
                    InsertText(entry.VitaminA2.ToString(), stringTable, "AQ", row, wsp);
                    InsertText(entry.VitaminA3.ToString(), stringTable, "AR", row, wsp);

                    InsertText(entry.IronA1.ToString(), stringTable, "AS", row, wsp);
                    InsertText(entry.IronA2.ToString(), stringTable, "AT", row, wsp);

                    InsertText(entry.MNP1.ToString(), stringTable, "AU", row, wsp);
                    InsertText(entry.MNP1.ToString(), stringTable, "AV", row, wsp);

                    if (entry.Deworming != null)
                        InsertText(entry.Deworming.Value.ToString("MM-dd-yy"), stringTable, "AW", row, wsp);

                    InsertText(entry.Remarks, stringTable, "AX", row, wsp);


                    //  ITERATEOR
                    row += 1;
                }


                var ms = new MemoryStream();
                doc.Clone(ms);

                return ms;
            }

        }

        public async System.Threading.Tasks.Task<Stream> ConvertPncToPdfAsync(string formId)
        {
            var form = await _appDbContext
                .TCL_PNCs
                .Include(p => p.Entries)
                .FirstOrDefaultAsync(p => p.TCL_PNCId == formId);

            var fileName = @"Templates\PNC_Template.xlsx";

            // Open the document for editing.
            using (SpreadsheetDocument doc =
                SpreadsheetDocument.CreateFromTemplate(fileName))//.Open(fileName, true))
            {

                var wbp = doc.WorkbookPart;
                var sheet = wbp.Workbook.Descendants<Sheet>().First();
                var wsp = (WorksheetPart)(wbp.GetPartById(sheet.Id));

                var stringTable = wbp.GetPartsOfType<SharedStringTablePart>()
                    .FirstOrDefault();


                uint row = 4;
                foreach (var entry in form.Entries)
                {
                    InsertText(entry.DateOfRegistration.Value.ToString("MM-dd-yy"), stringTable, "A", row, wsp);
                    MergeCells($"A{row}", $"A{row + 1}", wsp.Worksheet);

                    InsertText(entry.FamilySerialNumber, stringTable, "B", row, wsp);
                    MergeCells($"B{row}", $"B{row + 1}", wsp.Worksheet);

                    InsertText(entry.Name, stringTable, "C", row, wsp);
                    MergeCells($"C{row}", $"C{row + 1}", wsp.Worksheet);

                    InsertText(entry.Address, stringTable, "D", row, wsp);
                    MergeCells($"D{row}", $"D{row + 1}", wsp.Worksheet);

                    InsertText(entry.Age.ToString(), stringTable, "E", row, wsp);
                    MergeCells($"E{row}", $"E{row + 1}", wsp.Worksheet);

                    if (entry.LMPDate != null)
                    {
                        InsertText(entry.LMPDate.Value.ToString("MM-dd-yy"), stringTable, "F", row, wsp);
                    }
                    if (!string.IsNullOrWhiteSpace(entry.LMPGP))
                    {
                        InsertText(entry.LMPGP, stringTable, "F", row + 1, wsp);
                    }

                    if (entry.EDC != null)
                    {
                        InsertText(entry.EDC.Value.ToString("MM-dd-yy"), stringTable, "G", row, wsp);
                        MergeCells($"G{row}", $"G{row + 1}", wsp.Worksheet);
                    }

                    if (entry.PrenatalVisitTrimester1 != null)
                    {
                        InsertText(entry.PrenatalVisitTrimester1.Value.ToString("MM-dd-yy"), stringTable, "H", row, wsp);
                        MergeCells($"H{row}", $"H{row + 1}", wsp.Worksheet);
                    }
                    if (entry.PrenatalVisitTrimester2 != null)
                    {
                        InsertText(entry.PrenatalVisitTrimester2.Value.ToString("MM-dd-yy"), stringTable, "I", row + 1, wsp);
                        MergeCells($"I{row}", $"I{row + 1}", wsp.Worksheet);
                    }
                    if (entry.PrenatalVisitTrimester3 != null)
                    {
                        InsertText(entry.PrenatalVisitTrimester3.Value.ToString("MM-dd-yy"), stringTable, "J", row, wsp);
                        MergeCells($"J{row}", $"J{row + 1}", wsp.Worksheet);
                    }

                    InsertText(entry.TetanusStatus, stringTable, "K", row, wsp);
                    MergeCells($"K{row}", $"K{row + 1}", wsp.Worksheet);


                    if (entry.DateTetanusToxiodVaccine1 != null)
                    {
                        InsertText(entry.DateTetanusToxiodVaccine1.Value.ToString("MM-dd-yy"), stringTable, "L", row, wsp);
                        MergeCells($"L{row}", $"L{row + 1}", wsp.Worksheet);
                    }
                    if (entry.DateTetanusToxiodVaccine2 != null)
                    {
                        InsertText(entry.DateTetanusToxiodVaccine2.Value.ToString("MM-dd-yy"), stringTable, "M", row, wsp);
                        MergeCells($"M{row}", $"M{row + 1}", wsp.Worksheet);
                    }
                    if (entry.DateTetanusToxiodVaccine3 != null)
                    {
                        InsertText(entry.DateTetanusToxiodVaccine3.Value.ToString("MM-dd-yy"), stringTable, "N", row, wsp);
                        MergeCells($"N{row}", $"N{row + 1}", wsp.Worksheet);
                    }
                    if (entry.DateTetanusToxiodVaccine4 != null)
                    {
                        InsertText(entry.DateTetanusToxiodVaccine4.Value.ToString("MM-dd-yy"), stringTable, "O", row, wsp);
                        MergeCells($"O{row}", $"O{row + 1}", wsp.Worksheet);
                    }
                    if (entry.DateTetanusToxiodVaccine5 != null)
                    {
                        InsertText(entry.DateTetanusToxiodVaccine5.Value.ToString("MM-dd-yy"), stringTable, "P", row, wsp);
                        MergeCells($"P{row}", $"P{row + 1}", wsp.Worksheet);
                    }

                    if (entry.IronWithFolicDateGiven1 != null)
                        InsertText(entry.IronWithFolicDateGiven1.Value.ToString("MM-dd-yy"), stringTable, "Q", row, wsp);
                    InsertText(entry.IronWithFolicNumberGiven1.ToString(), stringTable, "Q", row + 1, wsp);

                    if (entry.IronWithFolicDateGiven2 != null)
                        InsertText(entry.IronWithFolicDateGiven2.Value.ToString("MM-dd-yy"), stringTable, "R", row, wsp);
                    InsertText(entry.IronWithFolicNumberGiven3.ToString(), stringTable, "R", row + 1, wsp);

                    if (entry.IronWithFolicDateGiven3 != null)
                        InsertText(entry.IronWithFolicDateGiven3.Value.ToString("MM-dd-yy"), stringTable, "S", row, wsp);
                    InsertText(entry.IronWithFolicNumberGiven3.ToString(), stringTable, "S", row + 1, wsp);

                    if (entry.IronWithFolicDateGiven4 != null)
                        InsertText(entry.IronWithFolicDateGiven4.Value.ToString("MM-dd-yy"), stringTable, "T", row, wsp);
                    InsertText(entry.IronWithFolicNumberGiven4.ToString(), stringTable, "T", row + 1, wsp);

                    if (entry.IronWithFolicDateGiven5 != null)
                        InsertText(entry.IronWithFolicDateGiven5.Value.ToString("MM-dd-yy"), stringTable, "U", row, wsp);
                    InsertText(entry.IronWithFolicNumberGiven5.ToString(), stringTable, "U", row + 1, wsp);

                    if (entry.IronWithFolicDateGiven6 != null)
                        InsertText(entry.IronWithFolicDateGiven6.Value.ToString("MM-dd-yy"), stringTable, "V", row, wsp);
                    InsertText(entry.IronWithFolicNumberGiven6.ToString(), stringTable, "V", row + 1, wsp);


                    if (entry.DateSTITested != null)
                    {
                        InsertText(entry.DateSTITested.Value.ToString("MM-dd-yy"), stringTable, "W", row, wsp);
                        MergeCells($"W{row}", $"W{row + 1}", wsp.Worksheet);
                    }
                    if (entry.DateSTIResult != null)
                    {
                        InsertText(entry.DateSTIResult.Value.ToString("MM-dd-yy"), stringTable, "X", row, wsp);
                        MergeCells($"X{row}", $"X{row + 1}", wsp.Worksheet);
                    }
                    if (entry.DateSTIPenicillin != null)
                    {
                        InsertText(entry.DateSTIPenicillin.Value.ToString("MM-dd-yy"), stringTable, "Y", row, wsp);
                        MergeCells($"Y{row}", $"Y{row + 1}", wsp.Worksheet);
                    }

                    if (entry.PregnancyDateTerminated != null)
                    {
                        InsertText(entry.PregnancyDateTerminated.Value.ToString("MM-dd-yy"), stringTable, "Z", row, wsp);
                        MergeCells($"Z{row}", $"Z{row + 1}", wsp.Worksheet);
                    }

                    InsertText(entry.PregnancyOutcome, stringTable, "AA", row, wsp);
                    InsertText(entry.PregnancyGender, stringTable, "AA", row+1, wsp);

                    InsertText(entry.BirthWeight.ToString(), stringTable, "AB", row, wsp);
                    MergeCells($"AB{row}", $"AB{row + 1}", wsp.Worksheet);

                    InsertText(entry.PlaceOfHealthFacility, stringTable, "AC", row, wsp);
                    MergeCells($"AC{row}", $"AC{row + 1}", wsp.Worksheet);

                    InsertText(entry.PlaceOfNIO, stringTable, "AD", row, wsp);
                    MergeCells($"AD{row}", $"AD{row + 1}", wsp.Worksheet);

                    InsertText(entry.AttendedBy, stringTable, "AE", row, wsp);
                    MergeCells($"AE{row}", $"AE{row + 1}", wsp.Worksheet);
                    
                    InsertText(entry.Remarks, stringTable, "AF", row, wsp);
                    MergeCells($"AF{row}", $"AF{row + 1}", wsp.Worksheet);


                    //  ITERATEOR
                    row += 2;
                }


                var ms = new MemoryStream();
                doc.Clone(ms);

                return ms;
            }

        }


        static void InsertText(string text, SharedStringTablePart shareStringPart, string columnName, uint rowIndex, WorksheetPart worksheetPart)
        {
            var index = InsertSharedStringItem(text, shareStringPart);
            //
            var cell = InsertCellInWorksheet(columnName, rowIndex, worksheetPart);
            cell.CellValue = new CellValue(index.ToString());
            cell.DataType = new DocumentFormat.OpenXml.EnumValue<CellValues>(CellValues.SharedString);
        }

        static int InsertSharedStringItem(string text, SharedStringTablePart shareStringPart)
        {
            // If the part does not contain a SharedStringTable, create one.
            if (shareStringPart.SharedStringTable == null)
            {
                shareStringPart.SharedStringTable = new SharedStringTable();
            }

            int i = 0;

            // Iterate through all the items in the SharedStringTable. If the text already exists, return its index.
            foreach (SharedStringItem item in shareStringPart.SharedStringTable.Elements<SharedStringItem>())
            {
                if (item.InnerText == text)
                {
                    return i;
                }

                i++;
            }

            // The text does not exist in the part. Create the SharedStringItem and return its index.
            shareStringPart.SharedStringTable.AppendChild(new SharedStringItem(new DocumentFormat.OpenXml.Spreadsheet.Text(text)));
            shareStringPart.SharedStringTable.Save();

            return i;
        }

        // Given a column name, a row index, and a WorksheetPart, inserts a cell into the worksheet. 
        // If the cell already exists, returns it. 
        static Cell InsertCellInWorksheet(string columnName, uint rowIndex, WorksheetPart worksheetPart)
        {
            Worksheet worksheet = worksheetPart.Worksheet;
            SheetData sheetData = worksheet.GetFirstChild<SheetData>();
            string cellReference = columnName + rowIndex;

            // If the worksheet does not contain a row with the specified row index, insert one.
            Row row;
            if (sheetData.Elements<Row>().Where(r => r.RowIndex == rowIndex).Count() != 0)
            {
                row = sheetData.Elements<Row>().Where(r => r.RowIndex == rowIndex).First();
            }
            else
            {
                row = new Row() { RowIndex = rowIndex };
                sheetData.Append(row);
            }

            // If there is not a cell with the specified column name, insert one.  
            if (row.Elements<Cell>().Where(c => c.CellReference.Value == columnName + rowIndex).Count() > 0)
            {
                return row.Elements<Cell>().Where(c => c.CellReference.Value == cellReference).First();
            }
            else
            {
                // Cells must be in sequential order according to CellReference. Determine where to insert the new cell.
                Cell refCell = null;
                foreach (Cell cell in row.Elements<Cell>())
                {
                    //if (string.Compare(cell.CellReference.Value, cellReference, true) > 0)
                    if (cell.CellReference.Value == cellReference)
                    {
                        refCell = cell;
                        break;
                    }
                }

                Cell newCell = new Cell() { CellReference = cellReference };
                row.InsertBefore(newCell, refCell);

                worksheet.Save();
                return newCell;
            }
        }

        static void MergeCells(string cell1Name, string cell2Name, Worksheet worksheet)
        {
            MergeCells mergeCells;

            if (worksheet.Elements<MergeCells>().Count() > 0)
                mergeCells = worksheet.Elements<MergeCells>().First();
            else
            {
                mergeCells = new MergeCells();

                // Insert a MergeCells object into the specified position.  
                if (worksheet.Elements<CustomSheetView>().Count() > 0)
                    worksheet.InsertAfter(mergeCells, worksheet.Elements<CustomSheetView>().First());
                else
                    worksheet.InsertAfter(mergeCells, worksheet.Elements<SheetData>().First());
            }

            // Create the merged cell and append it to the MergeCells collection.  
            MergeCell mergeCell = new MergeCell()
            {
                Reference = new StringValue(cell1Name + ":" + cell2Name)
            };
            mergeCells.Append(mergeCell);
        }
    }


}
