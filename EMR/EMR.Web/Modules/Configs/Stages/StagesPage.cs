
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Stages"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StagesRow))]
    public class StagesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/Stages/StagesIndex.cshtml");
        }
    }
}