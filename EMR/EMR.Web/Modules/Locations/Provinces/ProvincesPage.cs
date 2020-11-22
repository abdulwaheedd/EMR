
namespace EMR.Locations.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Locations/Provinces"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProvincesRow))]
    public class ProvincesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Locations/Provinces/ProvincesIndex.cshtml");
        }
    }
}