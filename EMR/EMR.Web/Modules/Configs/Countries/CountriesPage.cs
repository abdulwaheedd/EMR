
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Countries"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CountriesRow))]
    public class CountriesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/Countries/CountriesIndex.cshtml");
        }
    }
}