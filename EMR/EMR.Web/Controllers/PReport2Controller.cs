using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Serenity.Web;
using System.Web.Http;
using Syncfusion.EJ.ReportViewer;
using Syncfusion.Reports.EJ;
using Newtonsoft.Json;
using EMR.Modules.ExtModels;

namespace webEMIS.Controllers
{

    [System.Web.Mvc.RoutePrefix("PReportt"), System.Web.Mvc.Route("{action=index}")]
    [PageAuthorize()]
    public class PReporttController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }
    }

    public class RDLReporttController : ApiController, IReportController
    {
        private readonly EmrDbContext _context;
        public RDLReporttController()
        {
            _context = new EmrDbContext();
        }
        public string DefaultParam = null;
        public object PostReportAction(Dictionary<string, object> jsonResult)
        {
            if (jsonResult.ContainsKey("CustomData"))
            {
                DefaultParam = jsonResult["CustomData"].ToString();
            }

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

            //var data = _context.RptMeddetails.Max(m=>m.Updated).ToList();
            var data = _context.RptMeddetails.GroupBy(x => x.VisitId).Select(y => y.OrderByDescending(z => z.Updated).ThenByDescending(t => t.OrderId).FirstOrDefault()).ToList();

            var parameters = new List<ReportParameter>();

            if (DefaultParam != null)
            {
                parameters = JsonConvert.DeserializeObject<List<ReportParameter>>(DefaultParam);
                reportOption.ReportModel.DataSources.Clear();
                reportOption.ReportModel.DataSources.Add(new ReportDataSource { Name = "prescrip", Value = data.Where(m => m.VisitId.Equals(Convert.ToInt64(parameters[0].Values[0]))) });
            }
        }

        public void OnReportLoaded(ReportViewerOptions reportOption)
        {

        }
    }
}
