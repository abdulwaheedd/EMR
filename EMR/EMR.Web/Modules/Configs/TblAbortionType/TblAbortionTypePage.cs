
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/AbortionTypes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblAbortionTypeRow))]
    public class TblAbortionTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblAbortionType/TblAbortionTypeIndex.cshtml");
        }
    }
}