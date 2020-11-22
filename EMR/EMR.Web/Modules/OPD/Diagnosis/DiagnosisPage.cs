
namespace EMR.OPD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OPD/Diagnosis"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DiagnosisRow))]
    public class DiagnosisController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OPD/Diagnosis/DiagnosisIndex.cshtml");
        }
    }
}