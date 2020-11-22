
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/TopographySub"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TopographySubRow))]
    public class TopographySubController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TopographySub/TopographySubIndex.cshtml");
        }
    }
}