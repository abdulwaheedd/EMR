
namespace EMR.OPD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OPD/LabTest"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LabTestRow))]
    public class LabTestController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OPD/LabTest/LabTestIndex.cshtml");
        }
    }
}