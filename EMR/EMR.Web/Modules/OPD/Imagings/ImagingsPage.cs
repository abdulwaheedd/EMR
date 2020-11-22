
namespace EMR.OPD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OPD/Imagings"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ImagingsRow))]
    public class ImagingsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OPD/Imagings/ImagingsIndex.cshtml");
        }
    }
}