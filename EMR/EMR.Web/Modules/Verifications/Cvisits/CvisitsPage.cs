
namespace EMR.Verifications.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Verifications/Cvisits"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CvisitsRow))]
    public class CvisitsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Verifications/Cvisits/CvisitsIndex.cshtml");
        }
    }
}