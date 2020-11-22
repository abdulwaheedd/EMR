
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/CaseTypes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblCaseTypesRow))]
    public class TblCaseTypesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblCaseTypes/TblCaseTypesIndex.cshtml");
        }
    }
}