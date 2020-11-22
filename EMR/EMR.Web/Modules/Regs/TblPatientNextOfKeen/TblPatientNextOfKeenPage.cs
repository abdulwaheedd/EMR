
namespace EMR.Regs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Regs/TblPatientNextOfKeen"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblPatientNextOfKeenRow))]
    public class TblPatientNextOfKeenController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Regs/TblPatientNextOfKeen/TblPatientNextOfKeenIndex.cshtml");
        }
    }
}