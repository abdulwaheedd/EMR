using EMR.Modules.ExtModels;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EMR.Controllers
{
    [PageAuthorize()]
    [RoutePrefix("InpatientCases"), Route("{action=index}")]
    public class InpatientCasesController : Controller
    {
        private readonly EmrDbContext _context = new EmrDbContext();
        public ActionResult Index()
        {
            //var data = _context.HMIRIndoorPatientsReport.AsNoTracking().ToList();

            //ViewBag.Data = data;
            return View();
        }
    }
}