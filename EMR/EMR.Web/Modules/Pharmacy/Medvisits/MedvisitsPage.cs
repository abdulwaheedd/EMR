
namespace EMR.Pharmacy.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Pharmacy/Medvisits"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MedvisitsRow))]
    public class MedvisitsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Pharmacy/Medvisits/MedvisitsIndex.cshtml");
        }
    }
}