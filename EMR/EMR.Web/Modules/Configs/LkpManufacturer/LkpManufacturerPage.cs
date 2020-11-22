
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Manufacturer"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LkpManufacturerRow))]
    public class LkpManufacturerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/LkpManufacturer/LkpManufacturerIndex.cshtml");
        }
    }
}