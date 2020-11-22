
namespace EMR.Pharmacy.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Pharmacy/Prescription"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MedPatientsRow))]
    public class MedPatientsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Pharmacy/MedPatients/MedPatientsIndex.cshtml");
        }
    }
}