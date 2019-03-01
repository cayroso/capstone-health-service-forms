using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace hsforms.web.Data
{
    public class AppRoles
    {
        public const string Administrator = "administrator";
        public const string MidWife = "midwife";
        public const string HealthWorker = "healthworker";
    }

    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }

        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }

        public string Email { get; set; }
        public string Phone { get; set; }
        public string Mobile { get; set; }

        public ICollection<UserRole> UserRoles { get; set; }
    }

    public class Role
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string RoleId { get; set; }

        public string Name { get; set; }

        public ICollection<UserRole> UserRoles { get; set; }
    }

    public class UserRole
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string UserRoleId { get; set; }

        public string UserId { get; set; }
        public User User { get; set; }

        public string RoleId { get; set; }
        public Role Role { get; set; }
    }
}
