
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/LkpTestTypes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LkpTestTypesRow))]
    public class LkpTestTypesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/LkpTestTypes/LkpTestTypesIndex.cshtml");
        }
    }
}