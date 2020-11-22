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
    [RoutePrefix("RunUpdater"), Route("{action=index}")]
    public class RunUpdaterController : Controller
    {
        private readonly EmrDbContext _context;
        public RunUpdaterController()
        {
            _context = new EmrDbContext();
        }
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Update()
        {
            _context.Database.CommandTimeout = int.MaxValue;
            _context.Database.ExecuteSqlCommand("InsertNewToTables");
            _context.Database.ExecuteSqlCommand("UpdateToTables");
            return Redirect("~/");
        }
    }
}