
namespace EMR.FM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("FM/UFPatients"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UserFeePatientsRow))]
    public class UserFeePatientsController : Controller
    {
        public ActionResult Index()
        {

            return View("~/Modules/FM/UserFeePatients/UserFeePatientsIndex.cshtml");
        }
    }
}