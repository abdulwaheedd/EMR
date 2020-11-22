
namespace EMR.Verifications.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Verifications/Cvitalsigns"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CvitalsignsRow))]
    public class CvitalsignsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Verifications/Cvitalsigns/CvitalsignsIndex.cshtml");
        }
    }
}