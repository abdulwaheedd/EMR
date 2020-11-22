
namespace EMR.OPD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OPD/BloodTransfusions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OpdBloodTransfusionsRow))]
    public class OpdBloodTransfusionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OPD/OpdBloodTransfusions/OpdBloodTransfusionsIndex.cshtml");
        }
    }
}