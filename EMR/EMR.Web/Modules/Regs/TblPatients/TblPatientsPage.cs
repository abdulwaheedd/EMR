
namespace EMR.Regs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Regs/Patients"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblPatientsRow))]
    public class TblPatientsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Regs/TblPatients/TblPatientsIndex.cshtml");
        }
    }
}