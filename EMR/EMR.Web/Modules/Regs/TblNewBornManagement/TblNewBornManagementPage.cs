
namespace EMR.Regs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Regs/NBManagement"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblNewBornManagementRow))]
    public class TblNewBornManagementController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Regs/TblNewBornManagement/TblNewBornManagementIndex.cshtml");
        }
    }
}