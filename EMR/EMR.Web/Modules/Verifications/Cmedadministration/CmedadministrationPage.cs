
namespace EMR.Verifications.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Verifications/Cmedadministration"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CmedadministrationRow))]
    public class CmedadministrationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Verifications/Cmedadministration/CmedadministrationIndex.cshtml");
        }
    }
}