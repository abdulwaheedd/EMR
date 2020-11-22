
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Forms"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LkpFormRow))]
    public class LkpFormController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/LkpForm/LkpFormIndex.cshtml");
        }
    }
}