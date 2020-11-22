
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/LkpHistory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LkpHistoryRow))]
    public class LkpHistoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/LkpHistory/LkpHistoryIndex.cshtml");
        }
    }
}