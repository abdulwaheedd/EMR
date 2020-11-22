
namespace EMR.Imaging.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Imaging/ImgImagings"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ImgImagingsRow))]
    public class ImgImagingsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Imaging/ImgImagings/ImgImagingsIndex.cshtml");
        }
    }
}