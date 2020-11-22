
namespace EMR.VitalSigns.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VitalSigns/Cycleplan"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SchedulingRow))]
    public class SchedulingController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VitalSigns/Scheduling/SchedulingIndex.cshtml");
        }
    }
}