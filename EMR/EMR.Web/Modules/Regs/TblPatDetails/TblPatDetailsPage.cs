
namespace EMR.Regs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Regs/TblPatDetails"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblPatDetailsRow))]
    public class TblPatDetailsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Regs/TblPatDetails/TblPatDetailsIndex.cshtml");
        }
    }
}