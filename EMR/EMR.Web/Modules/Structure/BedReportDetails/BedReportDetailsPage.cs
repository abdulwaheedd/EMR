
namespace EMR.Structure.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Structure/BedReportDetails"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BedReportDetailsRow))]
    public class BedReportDetailsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Structure/BedReportDetails/BedReportDetailsIndex.cshtml");
        }
    }
}