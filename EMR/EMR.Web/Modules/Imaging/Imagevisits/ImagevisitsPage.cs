
namespace EMR.Imaging.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Imaging/Imagevisits"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ImagevisitsRow))]
    public class ImagevisitsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Imaging/Imagevisits/ImagevisitsIndex.cshtml");
        }
    }
}