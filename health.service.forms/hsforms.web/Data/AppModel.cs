using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace hsforms.web.Data
{
    public enum StatusEnum
    {
        Unknown = 0,
        Created = 1,
        Modified = 2,
        Deleted = 3
    }

    /// <summary>
    /// Target Client List for Nutrition and EPI Program
    /// </summary>
    public class TCL_NEPI
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string TCL_NEPIId { get; set; }
        public string Barangay { get; set; }
        public string Municipality { get; set; }
        public string Province { get; set; }
        public string Region { get; set; }

        public string UserId { get; set; }
        public User User { get; set; }

        public virtual List<TCL_NEPI_Entry> Entries { get; set; }

        public DateTime LastUploaded { get; set; }

        public TCL_NEPI()
        {
            TCL_NEPIId = string.Empty;
            Barangay = string.Empty;
            Municipality = string.Empty;
            Province = string.Empty;
            Region = string.Empty;

            Entries = new List<TCL_NEPI_Entry>();
        }
    }

    public class TCL_NEPI_Entry
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string TCL_NEPI_EntryId { get; set; }
        public string TCL_NEPIId { get; set; }
        public virtual TCL_NEPI TCL_NEPI { get; set; }

        //  PART I
        [DataType(DataType.Date)]
        public DateTime? DateOfRegistration { get; set; }
        [DataType(DataType.Date)]
        public DateTime DateOfBirth { get; set; }
        public string FamilySerialNumber { get; set; }
        public string NHTS { get; set; }
        public string NameOfChild { get; set; }
        public decimal Weight { get; set; }
        public decimal Height { get; set; }
        public string Gender { get; set; }
        public string NameOfMother { get; set; }
        public string Address { get; set; }

        [DataType(DataType.Date)]
        public DateTime? DateNewbornScreeningReferral { get; set; }
        [DataType(DataType.Date)]
        public DateTime? DateNewbornScreeningDone { get; set; }

        public string CPABTTStatus { get; set; }
        [DataType(DataType.Date)]
        public DateTime? CPABTTAssessed { get; set; }

        public bool ChildExclusiveBreastFeed1 { get; set; }
        public bool ChildExclusiveBreastFeed2 { get; set; }
        public bool ChildExclusiveBreastFeed3 { get; set; }
        public bool ChildExclusiveBreastFeed4 { get; set; }
        public bool ChildExclusiveBreastFeed5 { get; set; }
        [DataType(DataType.Date)]
        public DateTime? ChildExclusiveBreastFeed6 { get; set; }

        public bool ComplimentaryFeeding6 { get; set; }
        public bool ComplimentaryFeeding7 { get; set; }
        public bool ComplimentaryFeeding8 { get; set; }

        //  PART II
        [DataType(DataType.Date)]
        public DateTime? BCG { get; set; }

        [DataType(DataType.Date)]
        public DateTime? HepaB1Within24hrs { get; set; }
        [DataType(DataType.Date)]
        public DateTime? HepaB1MoreThan24hrs { get; set; }

        [DataType(DataType.Date)]
        public DateTime? Pentavalent1 { get; set; }
        [DataType(DataType.Date)]
        public DateTime? Pentavalent2 { get; set; }
        [DataType(DataType.Date)]
        public DateTime? Pentavalent3 { get; set; }

        [DataType(DataType.Date)]
        public DateTime? OPV1 { get; set; }
        [DataType(DataType.Date)]
        public DateTime? OPV2 { get; set; }
        [DataType(DataType.Date)]
        public DateTime? OPV3 { get; set; }

        [DataType(DataType.Date)]
        public DateTime? IPV { get; set; }

        [DataType(DataType.Date)]
        public DateTime? MCV1 { get; set; }
        [DataType(DataType.Date)]
        public DateTime? MCV2 { get; set; }

        [DataType(DataType.Date)] public DateTime? DateFullyImmunizedChild { get; set; }

        [DataType(DataType.Date)]
        public DateTime? RotaVirusVaccine1 { get; set; }
        [DataType(DataType.Date)]
        public DateTime? RotaVirusVaccine2 { get; set; }


        [DataType(DataType.Date)]
        public DateTime? PCV1 { get; set; }
        [DataType(DataType.Date)]
        public DateTime? PCV2 { get; set; }
        [DataType(DataType.Date)]
        public DateTime? PCV3 { get; set; }

        public bool VitaminA1 { get; set; }
        public bool VitaminA2 { get; set; }
        public bool VitaminA3 { get; set; }

        public bool IronA1 { get; set; }
        public bool IronA2 { get; set; }

        public bool MNP1 { get; set; }
        public bool MNP2 { get; set; }

        [DataType(DataType.Date)]
        public DateTime? Deworming { get; set; }

        public string Remarks { get; set; }
    }


    /// <summary>
    /// Target Client List for Prenatal Care
    /// </summary>
    public class TCL_PNC
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string TCL_PNCId { get; set; }
        public string Barangay { get; set; }
        public string Municipality { get; set; }
        public string Province { get; set; }
        public string Region { get; set; }

        public string UserId { get; set; }
        public User User { get; set; }

        public virtual List<TCL_PNC_Entry> Entries { get; set; }

        public DateTime LastUploaded { get; set; }
        public TCL_PNC()
        {
            TCL_PNCId = string.Empty;
            Barangay = string.Empty;
            Municipality = string.Empty;
            Province = string.Empty;
            Region = string.Empty;

            Entries = new List<TCL_PNC_Entry>();
        }
    }

    public class TCL_PNC_Entry
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string TCL_PNC_EntryId { get; set; }
        public string TCL_PNCId { get; set; }
        public TCL_PNC TCL_PNC { get; set; }
        //  PART I

        public DateTime? DateOfRegistration { get; set; }
        public string FamilySerialNumber { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int Age { get; set; }
        public DateTime? LMPDate { get; set; }
        public string LMPGP { get; set; }
        public DateTime? EDC { get; set; }

        public DateTime? PrenatalVisitTrimester1 { get; set; }
        public DateTime? PrenatalVisitTrimester2 { get; set; }
        public DateTime? PrenatalVisitTrimester3 { get; set; }

        //  PART II

        public string TetanusStatus { get; set; }

        public DateTime? DateTetanusToxiodVaccine1 { get; set; }
        public DateTime? DateTetanusToxiodVaccine2 { get; set; }
        public DateTime? DateTetanusToxiodVaccine3 { get; set; }
        public DateTime? DateTetanusToxiodVaccine4 { get; set; }
        public DateTime? DateTetanusToxiodVaccine5 { get; set; }

        public DateTime? IronWithFolicDateGiven1 { get; set; }
        public int IronWithFolicNumberGiven1 { get; set; }

        public DateTime? IronWithFolicDateGiven2 { get; set; }
        public int IronWithFolicNumberGiven2 { get; set; }

        public DateTime? IronWithFolicDateGiven3 { get; set; }
        public int IronWithFolicNumberGiven3 { get; set; }

        public DateTime? IronWithFolicDateGiven4 { get; set; }
        public int IronWithFolicNumberGiven4 { get; set; }

        public DateTime? IronWithFolicDateGiven5 { get; set; }
        public int IronWithFolicNumberGiven5 { get; set; }

        public DateTime? IronWithFolicDateGiven6 { get; set; }
        public int IronWithFolicNumberGiven6 { get; set; }

        public DateTime? DateSTITested { get; set; }
        public DateTime? DateSTIResult { get; set; }
        public DateTime? DateSTIPenicillin { get; set; }

        public DateTime? PregnancyDateTerminated { get; set; }
        public string PregnancyOutcome { get; set; }
        public string PregnancyGender { get; set; }

        public decimal BirthWeight { get; set; }
        public string PlaceOfHealthFacility { get; set; }
        public string PlaceOfNIO { get; set; }
        public string AttendedBy { get; set; }

        public string Remarks { get; set; }
    }

    /// <summary>
    /// Target Client List for Family Planning
    /// </summary>
    public class TCL_FP
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string TCL_FPId { get; set; }
        public string Barangay { get; set; }
        public string Municipality { get; set; }
        public string Province { get; set; }
        public string Region { get; set; }

        public string UserId { get; set; }
        public User User { get; set; }

        public virtual List<TCL_FP_Entry> Entries { get; set; }

        public DateTime LastUploaded { get; set; }

        public TCL_FP()
        {
            TCL_FPId = string.Empty;
            Barangay = string.Empty;
            Municipality = string.Empty;
            Province = string.Empty;
            Region = string.Empty;

            Entries = new List<TCL_FP_Entry>();
        }
    }

    public class TCL_FP_Entry
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string TCL_FP_EntryId { get; set; }
        public string TCL_FPId { get; set; }
        public TCL_FP TCL_FP { get; set; }

        //  PART I

        public DateTime DateOfRegistration { get; set; }
        public string FamilySerialNumber { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public DateTime BirthDate { get; set; }
        [NotMapped]
        public int Age => (DateTime.UtcNow.Year - BirthDate.Year);
        
        public string TypeOfClient { get; set; }

        public string PresentMethod { get; set; }
        public string PreviousMethod { get; set; }

        public DateTime? DateNextService1 { get; set; }
        public DateTime? DateAccomplishedService1 { get; set; }
        public DateTime? DateNextService2 { get; set; }
        public DateTime? DateAccomplishedService2 { get; set; }
        public DateTime? DateNextService3 { get; set; }
        public DateTime? DateAccomplishedService3 { get; set; }
        public DateTime? DateNextService4 { get; set; }
        public DateTime? DateAccomplishedService4 { get; set; }
        public DateTime? DateNextService5 { get; set; }
        public DateTime? DateAccomplishedService5 { get; set; }
        public DateTime? DateNextService6 { get; set; }
        public DateTime? DateAccomplishedService6 { get; set; }
        public DateTime? DateNextService7 { get; set; }
        public DateTime? DateAccomplishedService7 { get; set; }
        public DateTime? DateNextService8 { get; set; }
        public DateTime? DateAccomplishedService8 { get; set; }
        public DateTime? DateNextService9 { get; set; }
        public DateTime? DateAccomplishedService9 { get; set; }
        public DateTime? DateNextService10 { get; set; }
        public DateTime? DateAccomplishedService10 { get; set; }
        public DateTime? DateNextService11 { get; set; }
        public DateTime? DateAccomplishedService11 { get; set; }
        public DateTime? DateNextService12 { get; set; }
        public DateTime? DateAccomplishedService12 { get; set; }

        public DateTime? DropoutDate { get; set; }
        public string DropoutReason { get; set; }

        public string Remarks { get; set; }
    } 
}
