
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/MaritalStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblMaritalStatusRow))]
    public class TblMaritalStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblMaritalStatus/TblMaritalStatusIndex.cshtml");
        }
    }
}