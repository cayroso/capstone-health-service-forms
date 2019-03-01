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

            context.SaveChanges();
        }
    }
}
