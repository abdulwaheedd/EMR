
namespace EMR.Verifications.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Verifications/Cimagings"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CimagingsRow))]
    public class CimagingsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Verifications/Cimagings/CimagingsIndex.cshtml");
        }
    }
}