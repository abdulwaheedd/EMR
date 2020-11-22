
namespace EMR.OPD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OPD/Patients"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PatientsRow))]
    public class PatientsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OPD/Patients/PatientsIndex.cshtml");
        }
    }
}