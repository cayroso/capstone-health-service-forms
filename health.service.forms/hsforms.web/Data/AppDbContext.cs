using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hsforms.web.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {

        }

        public DbSet<Role> Roles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }

        public DbSet<TCL_NEPI> TCL_NEPIs { get; set; }
        public DbSet<TCL_NEPI_Entry> TCL_NEPI_Entries { get; set; }

        public DbSet<TCL_PNC> TCL_PNCs { get; set; }
        public DbSet<TCL_PNC_Entry> TCL_PNC_Entries { get; set; }

        public DbSet<TCL_FP> TCL_FPs { get; set; }
        public DbSet<TCL_FP_Entry> TCL_FP_Entries { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                .HasMany(p => p.UserRoles)
                .WithOne(p => p.User)
                .HasForeignKey(fk => fk.UserId)
                .IsRequired();

            modelBuilder.Entity<Role>()
                 .HasMany(p => p.UserRoles)
                 .WithOne(p => p.Role)
                 .HasForeignKey(fk => fk.RoleId)
                 .IsRequired();

            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Role>().ToTable("Role");
            modelBuilder.Entity<UserRole>().ToTable("UserRole");

            modelBuilder.Entity<TCL_NEPI>()
                .HasMany(p => p.Entries)
                .WithOne(p => p.TCL_NEPI)
                .HasForeignKey(fk => fk.TCL_NEPIId)
                .IsRequired();

            modelBuilder.Entity<TCL_NEPI>()
                .HasOne(p => p.User)
                .WithMany(p => p.NEPIs)
                .HasForeignKey(p => p.UserId)
                .IsRequired();
                
            modelBuilder.Entity<TCL_PNC>()
                .HasMany(p => p.Entries)
                .WithOne(p => p.TCL_PNC)
                .HasForeignKey(fk => fk.TCL_PNCId)
                .IsRequired();

            modelBuilder.Entity<TCL_PNC>()
                .HasOne(p => p.User)
                .WithMany(p => p.PNCs)
                .HasForeignKey(p => p.UserId)
                .IsRequired();

            modelBuilder.Entity<TCL_FP>()
                .HasMany(p => p.Entries)
                .WithOne(p => p.TCL_FP)
                .HasForeignKey(fk => fk.TCL_FPId)
                .IsRequired();

            modelBuilder.Entity<TCL_FP>()
                .HasOne(p => p.User)
                .WithMany(p => p.FPs)
                .HasForeignKey(p => p.UserId)
                .IsRequired();

            modelBuilder.Entity<TCL_NEPI>().ToTable("NEPI");
            modelBuilder.Entity<TCL_NEPI_Entry>().ToTable("NEPIEntry");

            modelBuilder.Entity<TCL_PNC>().ToTable("PNC");
            modelBuilder.Entity<TCL_PNC_Entry>().ToTable("PNCEntry");

            modelBuilder.Entity<TCL_FP>().ToTable("FP");
            modelBuilder.Entity<TCL_FP_Entry>().ToTable("FPEntry");
        }

    }

    public static class AppDbInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            if (context.Users.Any())
            {
                return;
            }


            //  create default roles
            context.AddRange(
                new Role { RoleId = AppRoles.Administrator, Name = "Administrator" },
                new Role { RoleId = AppRoles.MidWife, Name = "MidWife" },
                new Role { RoleId = AppRoles.HealthWorker, Name = "HealthWorker" }
                );

            //  create default users

            context.AddRange(
                new User
                {
                    UserId = "administrator",
                    UserName = "admin",
                    Password = "1234",
                    FirstName = "Administrator",
                    MiddleName = "Administrator",
                    LastName = "Administrator",
                    Email = "admin@hsforms.com",
                    Phone = "phone#",
                    Mobile = "mobile#",
                    UserRoles = new List<UserRole>(new[] { new UserRole { UserId = "administrator", RoleId = AppRoles.Administrator } })
                },

                new User
                {
                    UserId = "midwife1",
                    UserName = "midwife1",
                    Password = "1234",
                    FirstName = "Midwife1",
                    MiddleName = "Midwife1",
                    LastName = "Midwife1",
                    Email = "midwife1@hsforms.com",
                    Phone = "Midwife1 phone#",
                    Mobile = "Midwife1 mobile#",
                    UserRoles = new List<UserRole>(new[] { new UserRole { UserId = "midwife1", RoleId = AppRoles.MidWife } })
                },
                new User
                {
                    UserId = "midwife2",
                    UserName = "midwife2",
                    Password = "1234",
                    FirstName = "Midwife2",
                    MiddleName = "Midwife2",
                    LastName = "Midwife2",
                    Email = "midwife2@hsforms.com",
                    Phone = "Midwife2 phone#",
                    Mobile = "Midwife2 mobile#",
                    UserRoles = new List<UserRole>(new[] { new UserRole { UserId = "midwife2", RoleId = AppRoles.MidWife } })
                },

                new User
                {
                    UserId = "healthworker1",
                    UserName = "healthworker1",
                    Password = "1234",
                    FirstName = "Healthworker1",
                    MiddleName = "Healthworker1",
                    LastName = "Healthworker1",
                    Email = "healthworker1@hsforms.com",
                    Phone = "Healthworker1 phone#",
                    Mobile = "Healthworker1 mobile#",
                    UserRoles = new List<UserRole>(new[] { new UserRole { UserId = "healthworker1", RoleId = AppRoles.HealthWorker } })
                }
                );

            InitForms(context);

            context.SaveChanges();
        }

        private static void InitForms(AppDbContext context)
        {

            for (var i = 1; i <= 3; i++)
            {
                var form = new TCL_NEPI()
                {
                    TCL_NEPIId = NewId(),
                    Barangay = $"Barangay #{i}",
                    Municipality = $"Municipality #{i}",
                    Province = $"Province #{i}",
                    Region = $"Region {i}",
                    UserId = "midwife1",
                    LastUploaded = DateTime.UtcNow
                };

                for (var n = 1; n <= 5; n++)
                {
                    var now = DateTime.UtcNow;

                    var entry = new TCL_NEPI_Entry
                    {
                        TCL_NEPIId = form.TCL_NEPIId,

                        VitaminA1 = true,
                        VitaminA2 = true,
                        VitaminA3 = true,
                        Weight = n,
                        PCV1 = now,
                        PCV2 = now,
                        PCV3 = now,
                        Address = $"Address {i}",
                        BCG = now,
                        ChildExclusiveBreastFeed1 = true,
                        ChildExclusiveBreastFeed2 = true,
                        ChildExclusiveBreastFeed3 = true,
                        ChildExclusiveBreastFeed4 = true,
                        ChildExclusiveBreastFeed5 = true,
                        ChildExclusiveBreastFeed6 = now,
                        ComplimentaryFeeding6 = true,
                        ComplimentaryFeeding7 = true,
                        ComplimentaryFeeding8 = true,
                        CPABTTAssessed = now,
                        CPABTTStatus = $"CPABTTSTatus {i}",
                        DateFullyImmunizedChild = now,
                        DateNewbornScreeningDone = now,
                        DateNewbornScreeningReferral = now,
                        DateOfBirth = now,
                        DateOfRegistration = now,
                        Deworming = now,
                        FamilySerialNumber = $"FSN #{i}",
                        Gender = "Gender",
                        Height = n,
                        HepaB1MoreThan24hrs = now,
                        HepaB1Within24hrs = now,
                        IPV = now,
                        IronA1 = true,
                        IronA2 = true,
                        MCV1 = now,
                        MCV2 = now,
                        MNP1 = true,
                        MNP2 = true,
                        NameOfChild = $"Child {i}",
                        NameOfMother = $"Mother {i}",
                        NHTS = "nhts",
                        OPV1 = now,
                        OPV2 = now,
                        OPV3 = now,
                        Pentavalent1 = now,
                        Pentavalent2 = now,
                        Pentavalent3 = now,
                        Remarks = "Remarks",
                        RotaVirusVaccine1 = now,
                        RotaVirusVaccine2 = now
                    };

                    form.Entries.Add(entry);
                }

                context.TCL_NEPIs.Add(form);
            }

            for (var i = 1; i <= 3; i++)
            {
                var form = new TCL_PNC
                {
                    Barangay = $"Barangay {i}",
                    Municipality = $"Munipality {i}",
                    Province = $"Province {i}",
                    Region = $"Region{i}",
                    TCL_PNCId = NewId(),
                    UserId = "midwife1"
                };

                for (var n = 1; n <= 5; n++)
                {
                    var now = DateTime.Now;

                    var entry = new TCL_PNC_Entry
                    {
                        TCL_PNCId = form.TCL_PNCId,
                        Address = $"Address {i}",
                        Age = n,
                        AttendedBy = "AttendedBy",
                        BirthWeight = n,
                        DateOfRegistraiton = now,
                        DateSTIPenicillin = now,
                        DateSTIResult = now,
                        DateSTITested = now,
                        DateTetanusToxiodVaccine1 = now,
                        DateTetanusToxiodVaccine2 = now,
                        DateTetanusToxiodVaccine3 = now,
                        DateTetanusToxiodVaccine4 = now,
                        DateTetanusToxiodVaccine5 = now,
                        EDC = now,
                        FamilySerialNumber = $"FSN {i}",
                        IronWithFolicDateGiven1 = now,
                        IronWithFolicNumberGiven1 = n,
                        IronWithFolicDateGiven2 = now,
                        IronWithFolicNumberGiven2 = n,
                        IronWithFolicDateGiven3 = now,
                        IronWithFolicNumberGiven3 = n,
                        IronWithFolicDateGiven4 = now,
                        IronWithFolicNumberGiven4 = n,
                        IronWithFolicDateGiven5 = now,
                        IronWithFolicNumberGiven5 = n,

                        IronWithFolicDateGiven6 = now,
                        IronWithFolicNumberGiven6 = n
                    };

                    form.Entries.Add(entry);
                }

                context.TCL_PNCs.Add(form);

            }

            for (var i = 1; i <= 3; i++)
            {
                var form = new TCL_FP
                {
                    Barangay = $"Barangay {i}",
                    Municipality = $"Munipality {i}",
                    Province = $"Province {i}",
                    Region = $"Region{i}",
                    TCL_FPId = NewId(),
                    UserId = "midwife1"
                };

                for (var n = 1; n <= 5; n++)
                {
                    var now = DateTime.UtcNow;

                    var entry = new TCL_FP_Entry
                    {
                        TCL_FPId = form.TCL_FPId,
                        Address = $"Address {n}",
                        BirthDate = now,
                        DateAccomplishedService1 = now,
                        DateAccomplishedService10 = now,
                        DateAccomplishedService11 = now,
                        DateAccomplishedService12 = now,
                        DateAccomplishedService2 = now,
                        DateAccomplishedService3 = now,
                        DateAccomplishedService4 = now,
                        DateAccomplishedService5 = now,
                        DateAccomplishedService6 = now,
                        DateAccomplishedService7 = now,
                        DateAccomplishedService8 = now,
                        DateAccomplishedService9 = now,
                        DateNextService1 = now,
                        DateNextService10 = now,
                        DateNextService11 = now,
                        DateNextService12 = now,
                        DateNextService2S = now,
                        DateNextService3 = now,
                        DateNextService4 = now,
                        DateNextService5 = now,
                        DateNextService6 = now,
                        DateNextService7 = now,
                        DateNextService8 = now,
                        DateNextService9 = now,
                        DateOfRegistration = now,
                        DropoutDate = now,
                        DropoutReason = "output reason",
                        FamilySerialNumber = $"FSN {n}",
                        Name = $"Name {n}",
                        PresentMethod = $"Present Method=0",
                        PreviousMethod = $"Previous Method=0",
                        TypeOfClient = $"TypeOfClient",
                        Remakrs = $"Remarks {n}",


                    };

                    form.Entries.Add(entry);
                }

                context.TCL_FPs.Add(form);
            }
        }

        static string NewId()
        {
            return Guid.NewGuid().ToString().ToLower();
        }
    }
}
