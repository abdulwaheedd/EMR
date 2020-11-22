
namespace EMR.Verifications.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Ver/Patients"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CpatientsRow))]
    public class CpatientsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Verifications/Cpatients/CpatientsIndex.cshtml");
        }
    }
}