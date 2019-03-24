using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hsforms.web.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace hsforms.web.Pages.Home
{
    [Authorize]
    public class IndexModel : PageModel
    {
        public void OnGet()
        {
            if (User.IsInRole(AppRoles.Administrator))
            {
                RedirectToPage("Administrator");
            }
            else if (User.IsInRole(AppRoles.MidWife))
            {
                RedirectToPage("Midwife");
            }
        }
    }
}