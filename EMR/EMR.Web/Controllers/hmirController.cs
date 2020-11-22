using EMR.Modules.ExtModels;
using Serenity.Web;
using Syncfusion.EJ.ReportViewer;
using Syncfusion.XlsIO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web.Http;
using System.Web.Mvc;

namespace EMR.Controllers
{
    [PageAuthorize()]
    [System.Web.Mvc.RoutePrefix("hmir"), System.Web.Mvc.Route("{action=index}")]
    public class hmirController : Controller
    {
        private readonly EmrDbContext _context;
        public hmirController()
        {
            _context = new EmrDbContext();
        }
        public ActionResult Index()
        {
            return View();
        }

    }

    public class HMIRReportController : ApiController, IReportController
    {
        public object PostReportAction(Dictionary<string, object> jsonResult)
        {
            return ReportHelper.ProcessReport(jsonResult, this);
        }

        [System.Web.Http.ActionName("GetResource")]
        [System.Web.Http.AcceptVerbs("GET")]
        public object GetResource(string key, string resourcetype, bool isPrint)
        {
            return ReportHelper.GetResource(key, resourcetype, isPrint);
        }

        public void OnInitReportOptions(ReportViewerOptions reportOption)
        {
        }

        public void OnReportLoaded(ReportViewerOptions reportOption)
        {
        }
    }
}