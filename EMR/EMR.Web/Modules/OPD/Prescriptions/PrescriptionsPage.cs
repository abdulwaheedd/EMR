
namespace EMR.OPD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OPD/Prescriptions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PrescriptionsRow))]
    public class PrescriptionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OPD/Prescriptions/PrescriptionsIndex.cshtml");
        }
    }
}