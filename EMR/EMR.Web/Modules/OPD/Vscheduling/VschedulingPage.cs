
namespace EMR.OPD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OPD/Cycleplan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VschedulingRow))]
    public class VschedulingController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OPD/Vscheduling/VschedulingIndex.cshtml");
        }
    }
}