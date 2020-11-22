
namespace EMR.Regs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Regs/TblDischarge"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblDischargeRow))]
    public class TblDischargeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Regs/TblDischarge/TblDischargeIndex.cshtml");
        }
    }
}