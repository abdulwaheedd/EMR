
namespace EMR.Common.Pages
{
    using EMR.Administration.Entities;
    using EMR.Dashboard;
    using Serenity.Data;
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.Web.Mvc;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        public string DashboardURL;

        public DashboardController()
        {
            var mt = DashboardUrlRow.Fields;

            var connection = SqlConnections.NewFor<DashboardUrlRow>();
            var mm = connection.TryFirst<DashboardUrlRow>(q => q
                    .Select(mt.Url)
                    .Where(mt.Active == 1));
            // DashboardURL = "http://103.132.98.87:3333/DashboardService.svc";
            DashboardURL = mm.Url;
        }

        [Authorize(), Route("~/")]
        [ReadPermission(PermissionKeys.Main.View)]
        public ActionResult Index()
        {
            //int? progId;
            //int? tenantId;
            //progId=((UserDefinition)Serenity.Authorization.UserDefinition).ModuleId;
            //tenantId= ((UserDefinition)Serenity.Authorization.UserDefinition).TenantId;

            //if (progId==1 & tenantId!=1)
            //{
            //    return View(MVC.Views.Common.Dashboard.UserFee, new DashboardPageModel());
            //}
            //else if(tenantId!=1 & progId==0)
            //{
            //    return Redirect("/Regs/Patients");
            //}
            //else

            return View(MVC.Views.Common.Dashboard.Main, new DashboardPageModel());
        }
        [Authorize()]
        public ActionResult Main()
        {
            return View(MVC.Views.Common.Dashboard.Main);
        }

        public ActionResult MainFrame()
        {
            //ViewBag.ServiceUrl = "http://103.23.247.87:3333/DashboardService.svc";
            //DashboardWindowsServiceInfo dashboardViewer = new DashboardWindowsServiceInfo();
            //ViewBag.ServiceUrl = dashboardViewer.ServiceUrl;
            ViewBag.ServiceUrl = DashboardURL;

            ViewBag.DashboardPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "\\\\") + "Dashboards\\\\Main Dashboard.sydx";
            return View(MVC.Views.Common.Dashboard.MainFrame);
        }

        [ReadPermission(PermissionKeys.Annual.View)]
        [Authorize()]
        public ActionResult Annual()
        {
            return View(MVC.Views.Common.Dashboard.Annual);
        }
        public ActionResult AnnualFrame()
        {
            //DashboardWindowsServiceInfo dashboardViewer = new DashboardWindowsServiceInfo();
            //ViewBag.ServiceUrl = dashboardViewer.ServiceUrl;
            ViewBag.ServiceUrl = DashboardURL;
            ViewBag.DashboardPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "\\\\") + "Dashboards\\\\Annual Trend Dashboard.sydx"; // Or use the remote (online) Dashboard Path. For example, http://dashboardsdkdemo.syncfusion.com//Dashboards//WorldWideCarSalesDashboard.sydx
                                                                                                                                               //ViewBag.ServiceUrl = "http://103.23.247.87:3333/DashboardService.svc"; // Or use the remote (online) Dashboard Service. For example, http://dashboardsdkdemo.syncfusion.com/DashboardService/DashboardService.svc;
            //ViewBag.ServiceUrl = DashboardURL;
            return View(MVC.Views.Common.Dashboard.AnnualFrame);
        }

        [ReadPermission(PermissionKeys.Inpatients.View), Display(Name = "Inpatients Dashboard")]
        [Authorize()]
        public ActionResult Inpatients()
        {
            return View(MVC.Views.Common.Dashboard.Inpatients);
        }

        public ActionResult InpatientsFrame()
        {
            //DashboardWindowsServiceInfo dashboardViewer = new DashboardWindowsServiceInfo();
            //ViewBag.ServiceUrl = dashboardViewer.ServiceUrl;
            ViewBag.ServiceUrl = DashboardURL;
            ViewBag.DashboardPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "\\\\") + "Dashboards\\\\Inpatients Dashboard.sydx"; // Or use the remote (online) Dashboard Path. For example, http://dashboardsdkdemo.syncfusion.com//Dashboards//WorldWideCarSalesDashboard.sydx
                                                                                                                                             //ViewBag.ServiceUrl = "http://103.23.247.87:3333/DashboardService.svc"; // Or use the remote (online) Dashboard Service. For example, http://dashboardsdkdemo.syncfusion.com/DashboardService/DashboardService.svc;
            //ViewBag.ServiceUrl = DashboardURL;
            return View(MVC.Views.Common.Dashboard.InpatientsFrame);
        }

        [ReadPermission(PermissionKeys.Abortions.View), Display(Name = "Abortions Dashboard")]
        [Authorize()]
        public ActionResult Abortions()
        {
            return View(MVC.Views.Common.Dashboard.Abortions);
        }

        public ActionResult AbortionsFrame()
        {
            //DashboardWindowsServiceInfo dashboardViewer = new DashboardWindowsServiceInfo();
            //ViewBag.ServiceUrl = dashboardViewer.ServiceUrl;
            ViewBag.ServiceUrl = DashboardURL;
            ViewBag.DashboardPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "\\\\") + "Dashboards\\\\Abortions Dashboard.sydx"; // Or use the remote (online) Dashboard Path. For example, http://dashboardsdkdemo.syncfusion.com//Dashboards//WorldWideCarSalesDashboard.sydx
                                                                                                                                            //ViewBag.ServiceUrl = "http://103.23.247.87:3333/DashboardService.svc"; // Or use the remote (online) Dashboard Service. For example, http://dashboardsdkdemo.syncfusion.com/DashboardService/DashboardService.svc;
            //ViewBag.ServiceUrl = DashboardURL;
            return View(MVC.Views.Common.Dashboard.AbortionsFrame);
        }

        [ReadPermission(PermissionKeys.AgeGroup.View), Display(Name = "Age Group")]
        [Authorize()]
        public ActionResult AgeGroup()
        {
            return View(MVC.Views.Common.Dashboard.AgeGroup);
        }

        public ActionResult AgeGroupFrame()
        {
            //DashboardWindowsServiceInfo dashboardViewer = new DashboardWindowsServiceInfo();
            //ViewBag.ServiceUrl = dashboardViewer.ServiceUrl;
            ViewBag.ServiceUrl = DashboardURL;
            ViewBag.DashboardPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "\\\\") + "Dashboards\\\\Age group status.sydx"; // Or use the remote (online) Dashboard Path. For example, http://dashboardsdkdemo.syncfusion.com//Dashboards//WorldWideCarSalesDashboard.sydx
                                                                                                                                            //ViewBag.ServiceUrl = "http://103.23.247.87:3333/DashboardService.svc"; // Or use the remote (online) Dashboard Service. For example, http://dashboardsdkdemo.syncfusion.com/DashboardService/DashboardService.svc;
            //ViewBag.ServiceUrl = DashboardURL;
            return View(MVC.Views.Common.Dashboard.AgeGroupFrame);
        }

        [ReadPermission(PermissionKeys.Top10Disease.View), Display(Name = "Top 10 Disease")]
        [Authorize()]
        public ActionResult Top10Disease()
        {
            return View(MVC.Views.Common.Dashboard.Top10Disease);
        }

        public ActionResult Top10DiseaseFrame()
        {
            //DashboardWindowsServiceInfo dashboardViewer = new DashboardWindowsServiceInfo();
            //ViewBag.ServiceUrl = dashboardViewer.ServiceUrl;
            ViewBag.ServiceUrl = DashboardURL;
            ViewBag.DashboardPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "\\\\") + "Dashboards\\\\Top 10 dieseases and death causes.sydx"; // Or use the remote (online) Dashboard Path. For example, http://dashboardsdkdemo.syncfusion.com//Dashboards//WorldWideCarSalesDashboard.sydx
                                                                                                                                         //ViewBag.ServiceUrl = "http://103.23.247.87:3333/DashboardService.svc"; // Or use the remote (online) Dashboard Service. For example, http://dashboardsdkdemo.syncfusion.com/DashboardService/DashboardService.svc;
            //ViewBag.ServiceUrl = DashboardURL;
            return View(MVC.Views.Common.Dashboard.Top10DiseaseFrame);
        }

        [ReadPermission(PermissionKeys.UserFee.View), Display(Name = "User Fee")]
        [Authorize()]
        public ActionResult UserFee()
        {
            return View(MVC.Views.Common.Dashboard.UserFee);
        }

        public ActionResult UserFeeFrame()
        {
            //DashboardWindowsServiceInfo dashboardViewer = new DashboardWindowsServiceInfo();
            //ViewBag.ServiceUrl = dashboardViewer.ServiceUrl;
            ViewBag.ServiceUrl = DashboardURL;
            ViewBag.DashboardPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "\\\\") + "Dashboards\\\\Hospital User Fee Collection.sydx"; // Or use the remote (online) Dashboard Path. For example, http://dashboardsdkdemo.syncfusion.com//Dashboards//WorldWideCarSalesDashboard.sydx
                                                                                                                                             //ViewBag.ServiceUrl = "http://103.23.247.87:3333/DashboardService.svc"; // Or use the remote (online) Dashboard Service. For example, http://dashboardsdkdemo.syncfusion.com/DashboardService/DashboardService.svc;
            //ViewBag.ServiceUrl = DashboardURL;
            return View(MVC.Views.Common.Dashboard.UserFeeFrame);
        }

        [ReadPermission(PermissionKeys.Admissions.View), Display(Name = "Admissions and discharges")]
        [Authorize()]
        public ActionResult Admissions()
        {
            return View(MVC.Views.Common.Dashboard.Admissions);
        }

        public ActionResult AdmissionsFrame()
        {
            ViewBag.ServiceUrl = DashboardURL;
            ViewBag.DashboardPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "\\\\") + "Dashboards\\\\Admission and discharges.sydx"; // Or use the remote (online) Dashboard Path. For example, http://dashboardsdkdemo.syncfusion.com//Dashboards//WorldWideCarSalesDashboard.sydx
                                                                                                                                                     //ViewBag.ServiceUrl = "http://103.23.247.87:3333/DashboardService.svc"; // Or use the remote (online) Dashboard Service. For example, http://dashboardsdkdemo.syncfusion.com/DashboardService/DashboardService.svc;
                                                                                                                                                     //ViewBag.ServiceUrl = DashboardURL;
            return View(MVC.Views.Common.Dashboard.AdmissionsFrame);
        }
    }
}
