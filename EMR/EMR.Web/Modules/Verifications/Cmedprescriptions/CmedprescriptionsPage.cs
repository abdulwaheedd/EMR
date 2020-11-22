
namespace EMR.Verifications.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Verifications/Cmedprescriptions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CmedprescriptionsRow))]
    public class CmedprescriptionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Verifications/Cmedprescriptions/CmedprescriptionsIndex.cshtml");
        }
    }
}