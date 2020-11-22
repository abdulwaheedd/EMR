
namespace EMR.Medadmins.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Medadmins/Medadministration"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MedadministrationRow))]
    public class MedadministrationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Medadmins/Medadministration/MedadministrationIndex.cshtml");
        }
    }
}