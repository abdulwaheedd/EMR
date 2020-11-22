
namespace EMR.LabTest.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("LabTest/LabTests"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LabTestsRow))]
    public class LabTestsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/LabTest/LabTests/LabTestsIndex.cshtml");
        }
    }
}