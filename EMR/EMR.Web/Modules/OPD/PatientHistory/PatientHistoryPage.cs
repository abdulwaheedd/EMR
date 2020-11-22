
namespace EMR.OPD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OPD/PatientHistory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PatientHistoryRow))]
    public class PatientHistoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OPD/PatientHistory/PatientHistoryIndex.cshtml");
        }
    }
}