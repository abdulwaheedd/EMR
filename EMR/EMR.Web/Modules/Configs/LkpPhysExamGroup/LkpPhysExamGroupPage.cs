
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/ExamGroup"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LkpPhysExamGroupRow))]
    public class LkpPhysExamGroupController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/LkpPhysExamGroup/LkpPhysExamGroupIndex.cshtml");
        }
    }
}