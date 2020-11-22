
namespace EMR.LabTest.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("LabTest/LabPatients"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LabPatientsRow))]
    public class LabPatientsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/LabTest/LabPatients/LabPatientsIndex.cshtml");
        }
    }
}