
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/TopographyMain"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TopographyMainRow))]
    public class TopographyMainController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TopographyMain/TopographyMainIndex.cshtml");
        }
    }
}