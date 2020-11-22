
namespace EMR.VitalSigns.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("VitalSigns/VitalPatients"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VitalPatientsRow))]
    public class VitalPatientsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/VitalSigns/VitalPatients/VitalPatientsIndex.cshtml");
        }
    }
}