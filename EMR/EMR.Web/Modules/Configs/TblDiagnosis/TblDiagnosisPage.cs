
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Diagnosis"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblDiagnosisRow))]
    public class TblDiagnosisController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblDiagnosis/TblDiagnosisIndex.cshtml");
        }
    }
}