
namespace EMR.OPD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OPD/Medadministration"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OpdMedadministrationRow))]
    public class OpdMedadministrationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OPD/OpdMedadministration/OpdMedadministrationIndex.cshtml");
        }
    }
}