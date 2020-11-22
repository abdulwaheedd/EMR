
//namespace EMR.Common.Pages
//{
//    using EMR.Dashboard;
//    using EMR.Modules.Common.Dashboard;
//    using Serenity.Data;
//    using Serenity.Web;
//    using System;
//    using System.ComponentModel.DataAnnotations;
//    using System.Web.Mvc;

//    [RoutePrefix("Dashboard"), Route("{action=Index}")]
//    [PageAuthorize(typeof(DashboardWindowsServiceInfo))]
//    public class DashboardController : Controller
//    {
//        [Route("~/")]
//        public ActionResult Index()
//        {
//            return View(MVC.Views.Common.Dashboard.Main, new DashboardPageModel());
//        }

//        public ActionResult MainFrame()
//        {
//            //ViewBag.ServiceUrl = "http://103.23.247.87:3333/DashboardService.svc";
//            ViewBag.ServiceUrl = "http://localhost:3333/DashboardService.svc";
//            ViewBag.DashboardPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "\\\\") + "Dashboards\\\\Main Dashboard.sydx";
//            return View(MVC.Views.Common.Dashboard.MainFrame);
//        }

//        [ReadPermission(PermissionKeys.Main.View)]
//        public ActionResult Main()
//        {
//            //ViewBag.ServiceUrl = "http://103.23.247.87:3333/DashboardService.svc";
//            //ViewBag.DashboardPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "\\\\") + "Dashboards\\\\Main Dashboard.sydx";
//            return View(MVC.Views.Common.Dashboard.Main);
//        }

//        [ReadPermission(PermissionKeys.Annual.View)]
//        public ActionResult Annual()
//        {
//            return View(MVC.Views.Common.Dashboard.Annual);
//        }
//        public ActionResult AnnualFrame()
//        {
//            ViewBag.DashboardPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "\\\\") + "Dashboards\\\\Annual Trend Dashboard.sydx"; // Or use the remote (online) Dashboard Path. For example, http://dashboardsdkdemo.syncfusion.com//Dashboards//WorldWideCarSalesDashboard.sydx
//            //ViewBag.ServiceUrl = "http://103.23.247.87:3333/DashboardService.svc"; // Or use the remote (online) Dashboard Service. For example, http://dashboardsdkdemo.syncfusion.com/DashboardService/DashboardService.svc;
//            ViewBag.ServiceUrl = "http://localhost:3333/DashboardService.svc";
//            return View(MVC.Views.Common.Dashboard.AnnualFrame);
//        }

//        [ReadPermission(PermissionKeys.Inpatients.View), Display(Name = "Inpatients Dashboard")]
//        public ActionResult Inpatients()
//        {
//            return View(MVC.Views.Common.Dashboard.Inpatients);
//        }

//        public ActionResult InpatientsFrame()
//        {
//            ViewBag.DashboardPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "\\\\") + "Dashboards\\\\Inpatients Dashboard.sydx"; // Or use the remote (online) Dashboard Path. For example, http://dashboardsdkdemo.syncfusion.com//Dashboards//WorldWideCarSalesDashboard.sydx
//            //ViewBag.ServiceUrl = "http://103.23.247.87:3333/DashboardService.svc"; // Or use the remote (online) Dashboard Service. For example, http://dashboardsdkdemo.syncfusion.com/DashboardService/DashboardService.svc;
//            ViewBag.ServiceUrl = "http://localhost:3333/DashboardService.svc";
//            return View(MVC.Views.Common.Dashboard.InpatientsFrame);
//        }

//        [ReadPermission(PermissionKeys.AllDashboards.View), Display(Name = "All Dashboards"), Route("~/AllDashboards")]
//        public ActionResult AllDashboards()
//        {

//            ViewBag.DashboardPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "\\\\") + "Dashboards\\\\All Dashboards.sydx"; // Or use the remote (online) Dashboard Path. For example, http://dashboardsdkdemo.syncfusion.com//Dashboards//WorldWideCarSalesDashboard.sydx
//            ViewBag.ServiceUrl = "http://103.23.247.87:3333/DashboardService.svc"; // Or use the remote (online) Dashboard Service. For example, http://dashboardsdkdemo.syncfusion.com/DashboardService/DashboardService.svc;
//            return View(MVC.Views.Common.Dashboard.Alldashboards);
//        }

//        [ReadPermission(PermissionKeys.Abortions.View), Display(Name = "Abortions Dashboard"), Route("~/Abortions")]
//        public ActionResult Abortions()
//        {

//            ViewBag.DashboardPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "\\\\") + "Dashboards\\\\Abortions Dashboard.sydx"; // Or use the remote (online) Dashboard Path. For example, http://dashboardsdkdemo.syncfusion.com//Dashboards//WorldWideCarSalesDashboard.sydx
//            //ViewBag.ServiceUrl = "http://103.23.247.87:3333/DashboardService.svc"; // Or use the remote (online) Dashboard Service. For example, http://dashboardsdkdemo.syncfusion.com/DashboardService/DashboardService.svc;
//            ViewBag.ServiceUrl = "http://localhost:3333/DashboardService.svc";
//            return View(MVC.Views.Common.Dashboard.Alldashboards);
//        }
//    }
//}
