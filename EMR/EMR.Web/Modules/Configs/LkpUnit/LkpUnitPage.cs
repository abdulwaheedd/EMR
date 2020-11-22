
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Units"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LkpUnitRow))]
    public class LkpUnitController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/LkpUnit/LkpUnitIndex.cshtml");
        }
    }
}