
namespace EMR.Pharmacy.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Pharmacy/Prescriptions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MedPrescriptionsRow))]
    public class MedPrescriptionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Pharmacy/MedPrescriptions/MedPrescriptionsIndex.cshtml");
        }
    }
}