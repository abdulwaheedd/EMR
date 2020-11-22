
namespace EMR.Structure.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Structure/BedReports"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BedReportsRow))]
    public class BedReportsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Structure/BedReports/BedReportsIndex.cshtml");
        }
    }
}