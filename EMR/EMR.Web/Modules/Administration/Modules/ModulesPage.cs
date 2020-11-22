
namespace EMR.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Modules"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ModulesRow))]
    public class ModulesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Modules/ModulesIndex.cshtml");
        }
    }
}