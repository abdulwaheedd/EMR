
namespace EMR.Locations.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Locations/FacilityTypes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FacilityTypesRow))]
    public class FacilityTypesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Locations/FacilityTypes/FacilityTypesIndex.cshtml");
        }
    }
}