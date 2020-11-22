
namespace EMR.VitalSigns.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VitalSigns/Vitalvisits"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VitalvisitsRow))]
    public class VitalvisitsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VitalSigns/Vitalvisits/VitalvisitsIndex.cshtml");
        }
    }
}