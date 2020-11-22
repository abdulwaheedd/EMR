
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Nbstatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblNbstatusRow))]
    public class TblNbstatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblNbstatus/TblNbstatusIndex.cshtml");
        }
    }
}