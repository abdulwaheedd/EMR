
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Wards"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblWardRow))]
    public class TblWardController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblWard/TblWardIndex.cshtml");
        }
    }
}