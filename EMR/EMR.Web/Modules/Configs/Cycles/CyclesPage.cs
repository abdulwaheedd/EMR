
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Cycles"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CyclesRow))]
    public class CyclesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/Cycles/CyclesIndex.cshtml");
        }
    }
}