
namespace EMR.Medadmins.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Medadmins/Medvisits"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MedvisitsRow))]
    public class MedvisitsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Medadmins/Medvisits/MedvisitsIndex.cshtml");
        }
    }
}