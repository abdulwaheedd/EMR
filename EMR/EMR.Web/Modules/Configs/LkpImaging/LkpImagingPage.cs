
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/LkpImaging"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LkpImagingRow))]
    public class LkpImagingController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/LkpImaging/LkpImagingIndex.cshtml");
        }
    }
}