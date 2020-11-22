
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Caretypes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CaretypesRow))]
    public class CaretypesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/Caretypes/CaretypesIndex.cshtml");
        }
    }
}