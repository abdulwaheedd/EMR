
namespace EMR.Medadmins.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Medadmins/BloodTransfusions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BloodTransfusionsRow))]
    public class BloodTransfusionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Medadmins/BloodTransfusions/BloodTransfusionsIndex.cshtml");
        }
    }
}