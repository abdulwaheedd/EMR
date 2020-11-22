
namespace EMR.OPD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OPD/Recommedations"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RecommedationsRow))]
    public class RecommedationsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OPD/Recommedations/RecommedationsIndex.cshtml");
        }
    }
}