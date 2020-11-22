
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/TblPositions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblPositionsRow))]
    public class TblPositionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblPositions/TblPositionsIndex.cshtml");
        }
    }
}