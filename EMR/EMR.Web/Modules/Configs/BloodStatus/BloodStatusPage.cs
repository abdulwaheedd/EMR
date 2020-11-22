
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/BloodStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BloodStatusRow))]
    public class BloodStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/BloodStatus/BloodStatusIndex.cshtml");
        }
    }
}