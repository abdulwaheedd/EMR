
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/LkpLosstypes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LkpLosstypesRow))]
    public class LkpLosstypesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/LkpLosstypes/LkpLosstypesIndex.cshtml");
        }
    }
}