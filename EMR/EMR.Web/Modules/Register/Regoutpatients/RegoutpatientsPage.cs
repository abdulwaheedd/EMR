
namespace EMR.Register.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Register/Patients"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RegoutpatientsRow))]
    public class RegoutpatientsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Register/Regoutpatients/RegoutpatientsIndex.cshtml");
        }
    }
}