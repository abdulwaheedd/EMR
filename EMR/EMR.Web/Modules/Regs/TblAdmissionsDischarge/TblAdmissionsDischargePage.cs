
namespace EMR.Regs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Regs/Admissions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblAdmissionsDischargeRow))]
    public class TblAdmissionsDischargeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Regs/TblAdmissionsDischarge/TblAdmissionsDischargeIndex.cshtml");
        }
    }
}