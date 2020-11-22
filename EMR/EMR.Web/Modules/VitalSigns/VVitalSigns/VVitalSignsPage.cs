
namespace EMR.VitalSigns.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VitalSigns/VitalSigns"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VVitalSignsRow))]
    public class VVitalSignsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VitalSigns/VVitalSigns/VVitalSignsIndex.cshtml");
        }
    }
}