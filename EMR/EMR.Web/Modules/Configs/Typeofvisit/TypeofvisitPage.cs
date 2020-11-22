
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Typeofvisit"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TypeofvisitRow))]
    public class TypeofvisitController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/Typeofvisit/TypeofvisitIndex.cshtml");
        }
    }
}