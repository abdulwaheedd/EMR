
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/LkpPhysExams"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LkpPhysExamsRow))]
    public class LkpPhysExamsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/LkpPhysExams/LkpPhysExamsIndex.cshtml");
        }
    }
}