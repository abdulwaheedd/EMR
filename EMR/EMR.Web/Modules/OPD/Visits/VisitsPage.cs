
namespace EMR.OPD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OPD/Visits"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VisitsRow))]
    public class VisitsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OPD/Visits/VisitsIndex.cshtml");
        }
    }
}