
namespace EMR.Medadmins.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Medadmins/Prescriptions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MPrescriptionsRow))]
    public class MPrescriptionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Medadmins/MPrescriptions/MPrescriptionsIndex.cshtml");
        }
    }
}