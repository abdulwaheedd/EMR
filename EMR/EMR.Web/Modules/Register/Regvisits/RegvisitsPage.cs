
namespace EMR.Register.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Register/Visits"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RegvisitsRow))]
    public class RegvisitsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Register/Regvisits/RegvisitsIndex.cshtml");
        }
    }
}