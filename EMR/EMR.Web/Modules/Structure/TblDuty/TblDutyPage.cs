
namespace EMR.Structure.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Structure/Duties"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblDutyRow))]
    public class TblDutyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Structure/TblDuty/TblDutyIndex.cshtml");
        }
    }
}