
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Recommandation"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LkpRecommandsRow))]
    public class LkpRecommandsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/LkpRecommands/LkpRecommandsIndex.cshtml");
        }
    }
}