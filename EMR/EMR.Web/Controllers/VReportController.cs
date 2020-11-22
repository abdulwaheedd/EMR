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
using System.IO;

namespace webEMIS.Controllers
{

    [System.Web.Mvc.RoutePrefix("VReport"), System.Web.Mvc.Route("{action=index}")]
    [PageAuthorize()]
    public class VReportController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }

    public class VDLReportController : ApiController, IReportController
    {
        Int64 VisitId = 0;
        private readonly EmrDbContext _context;
        public VDLReportController()
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

            var data = _context.RptMeddetails.ToList();

            var parameters = new List<ReportParameter>();

            if (DefaultParam != null)
            {
                parameters = JsonConvert.DeserializeObject<List<ReportParameter>>(DefaultParam);
                reportOption.ReportModel.DataSources.Clear();
                reportOption.ReportModel.DataSources.Add(new ReportDataSource { Name = "prescrip", Value = data.Where(m => m.VisitId.Equals(Convert.ToInt64(parameters[0].Values[0]))) });
                varials.VisitorId = Convert.ToInt64(parameters[0].Values[0]);
            }
        }

        public void OnReportLoaded(ReportViewerOptions reportOption)
        {
            string path = AppDomain.CurrentDomain.GetData("DataDirectory").ToString()+"\\Upload\\";

            var vitals = _context.RptVitalsigns.ToList();
            var physexams = _context.RptPhysExams.ToList();
            var historyExams = _context.RptHistories.ToList();
            var imagings = _context.RptImagings.Select(m => new
            {
                Id = m.Id,
                VisitId = m.VisitId,
                ImagingName = m.ImagingName,
                TestImage = path+ m.TestImage,
                Note=m.Note
            }).ToList();

            var labTests = _context.RptLabTests.ToList();
            var Recommendations = _context.RptRecommendations.ToList();
            var Diagnosis = _context.RptDiagnoses.ToList();

            var parameters = new List<ReportParameter>();

            if (reportOption.SubReportModel != null)
            {
                reportOption.SubReportModel.DataSources = new ReportDataSourceCollection();
                reportOption.SubReportModel.DataSources.Add(new ReportDataSource { Name = "Vitals", Value = vitals.Where(m => m.VisitId.Equals(varials.VisitorId)) });
                reportOption.SubReportModel.DataSources.Add(new ReportDataSource { Name = "Physexams", Value = physexams.Where(m => m.VisitId.Equals(varials.VisitorId)) });
                reportOption.SubReportModel.DataSources.Add(new ReportDataSource { Name = "HistoryDs", Value = historyExams.Where(m => m.VisitId.Equals(varials.VisitorId)) });
                reportOption.SubReportModel.DataSources.Add(new ReportDataSource { Name = "Imagings", Value = imagings.Where(m => m.VisitId.Equals(varials.VisitorId)) });
                reportOption.SubReportModel.DataSources.Add(new ReportDataSource { Name = "LabTests", Value = labTests.Where(m => m.VisitId.Equals(varials.VisitorId)) });
                reportOption.SubReportModel.DataSources.Add(new ReportDataSource { Name = "Recommendations", Value = Recommendations.Where(m => m.VisitId.Equals(varials.VisitorId)) });
                reportOption.SubReportModel.DataSources.Add(new ReportDataSource { Name = "Diagnosis", Value = Diagnosis.Where(m => m.VisitId.Equals(varials.VisitorId)) });
            }
        }
    }
    public class varials
    {
        public static Int64 VisitorId { get; set; }
    }
}
