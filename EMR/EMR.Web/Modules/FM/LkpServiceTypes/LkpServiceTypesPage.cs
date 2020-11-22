
namespace EMR.FM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("FM/ServiceTypes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LkpServiceTypesRow))]
    public class LkpServiceTypesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/FM/LkpServiceTypes/LkpServiceTypesIndex.cshtml");
        }
    }
}