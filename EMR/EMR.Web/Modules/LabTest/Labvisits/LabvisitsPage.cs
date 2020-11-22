
namespace EMR.LabTest.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("LabTest/Labvisits"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LabvisitsRow))]
    public class LabvisitsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/LabTest/Labvisits/LabvisitsIndex.cshtml");
        }
    }
}