
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/AgeTypes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblAgeTypesRow))]
    public class TblAgeTypesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblAgeTypes/TblAgeTypesIndex.cshtml");
        }
    }
}