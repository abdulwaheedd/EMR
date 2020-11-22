
namespace EMR.Verifications.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Verifications/Cdiagnosis"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CdiagnosisRow))]
    public class CdiagnosisController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Verifications/Cdiagnosis/CdiagnosisIndex.cshtml");
        }
    }
}