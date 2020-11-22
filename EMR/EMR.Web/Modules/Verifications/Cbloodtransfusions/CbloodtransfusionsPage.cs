
namespace EMR.Verifications.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Verifications/Cbloodtransfusions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CbloodtransfusionsRow))]
    public class CbloodtransfusionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Verifications/Cbloodtransfusions/CbloodtransfusionsIndex.cshtml");
        }
    }
}