
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Supplier"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LkpVendorRow))]
    public class LkpVendorController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/LkpVendor/LkpVendorIndex.cshtml");
        }
    }
}