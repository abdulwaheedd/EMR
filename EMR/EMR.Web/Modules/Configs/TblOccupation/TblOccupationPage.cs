
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Occupation"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblOccupationRow))]
    public class TblOccupationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblOccupation/TblOccupationIndex.cshtml");
        }
    }
}