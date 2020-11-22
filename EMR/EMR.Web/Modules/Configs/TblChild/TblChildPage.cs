
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Child"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblChildRow))]
    public class TblChildController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblChild/TblChildIndex.cshtml");
        }
    }
}