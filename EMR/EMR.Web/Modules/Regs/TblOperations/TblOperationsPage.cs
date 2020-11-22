
namespace EMR.Regs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Regs/Operations"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblOperationsRow))]
    public class TblOperationsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Regs/TblOperations/TblOperationsIndex.cshtml");
        }
    }
}