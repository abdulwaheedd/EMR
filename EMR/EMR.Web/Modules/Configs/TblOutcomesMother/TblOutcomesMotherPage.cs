
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Outcomes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblOutcomesMotherRow))]
    public class TblOutcomesMotherController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblOutcomesMother/TblOutcomesMotherIndex.cshtml");
        }
    }
}