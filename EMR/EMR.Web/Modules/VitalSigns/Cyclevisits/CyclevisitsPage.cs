
namespace EMR.VitalSigns.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VitalSigns/Cyclevisits"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CyclevisitsRow))]
    public class CyclevisitsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VitalSigns/Cyclevisits/CyclevisitsIndex.cshtml");
        }
    }
}