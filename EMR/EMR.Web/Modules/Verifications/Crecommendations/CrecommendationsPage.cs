
namespace EMR.Verifications.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Verifications/Crecommendations"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CrecommendationsRow))]
    public class CrecommendationsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Verifications/Crecommendations/CrecommendationsIndex.cshtml");
        }
    }
}