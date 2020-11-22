
namespace EMR.Medadmins.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Medadmins/nursing"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MedadminpatientsRow))]
    public class MedadminpatientsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Medadmins/Medadminpatients/MedadminpatientsIndex.cshtml");
        }
    }
}