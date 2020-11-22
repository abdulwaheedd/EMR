
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/BloodGroup"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblBloodGroupRow))]
    public class TblBloodGroupController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblBloodGroup/TblBloodGroupIndex.cshtml");
        }
    }
}