
namespace EMR.OPD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OPD/VitalSigns"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VitalSignsRow))]
    public class VitalSignsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OPD/VitalSigns/VitalSignsIndex.cshtml");
        }
    }
}