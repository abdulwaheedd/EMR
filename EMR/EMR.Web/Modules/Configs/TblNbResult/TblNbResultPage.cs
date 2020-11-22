
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/NbResult"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblNbResultRow))]
    public class TblNbResultController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblNbResult/TblNbResultIndex.cshtml");
        }
    }
}