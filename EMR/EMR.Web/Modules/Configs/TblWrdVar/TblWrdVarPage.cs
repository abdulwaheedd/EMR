
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Operationstype"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblWrdVarRow))]
    public class TblWrdVarController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblWrdVar/TblWrdVarIndex.cshtml");
        }
    }
}