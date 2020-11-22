
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/atientTypes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LkpPatientTypeRow))]
    public class LkpPatientTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/LkpPatientType/LkpPatientTypeIndex.cshtml");
        }
    }
}