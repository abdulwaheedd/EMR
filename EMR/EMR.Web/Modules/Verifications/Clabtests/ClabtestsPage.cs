
namespace EMR.Verifications.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Verifications/Clabtests"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ClabtestsRow))]
    public class ClabtestsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Verifications/Clabtests/ClabtestsIndex.cshtml");
        }
    }
}