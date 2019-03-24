using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hsforms.web.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace hsforms.web.Pages.Midwife
{
    [Authorize(Roles = AppRoles.MidWife)]
    public class IndexModel : PageModel
    {
        public void OnGet()
        {
        }
    }
}