
namespace EMR.Locations.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Locations/Districts"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DistrictsRow))]
    public class DistrictsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Locations/Districts/DistrictsIndex.cshtml");
        }
    }
}