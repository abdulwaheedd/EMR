
namespace EMR.Register.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Register/PatAttendants"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PatAttendantsRow))]
    public class PatAttendantsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Register/PatAttendants/PatAttendantsIndex.cshtml");
        }
    }
}