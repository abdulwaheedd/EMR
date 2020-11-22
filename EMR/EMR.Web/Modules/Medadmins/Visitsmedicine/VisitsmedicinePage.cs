
namespace EMR.Medadmins.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Medadmins/Visitsmedicine"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VisitsmedicineRow))]
    public class VisitsmedicineController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Medadmins/Visitsmedicine/VisitsmedicineIndex.cshtml");
        }
    }
}