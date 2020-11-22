
namespace EMR.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/DashboardUrl"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DashboardUrlRow))]
    public class DashboardUrlController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/DashboardUrl/DashboardUrlIndex.cshtml");
        }
    }
}