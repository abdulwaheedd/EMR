
namespace EMR.FM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("FM/Services"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LkpServicesRow))]
    public class LkpServicesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/FM/LkpServices/LkpServicesIndex.cshtml");
        }
    }
}