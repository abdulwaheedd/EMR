
namespace EMR.Locations.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Locations/Facilities"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FacilityInfoRow))]
    public class FacilityInfoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Locations/FacilityInfo/FacilityInfoIndex.cshtml");
        }
    }
}