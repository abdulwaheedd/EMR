
namespace EMR.Regs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Regs/Examinations"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblTestExaminationsRow))]
    public class TblTestExaminationsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Regs/TblTestExaminations/TblTestExaminationsIndex.cshtml");
        }
    }
}