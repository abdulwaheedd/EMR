
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Exams"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblExaminationsDetailsRow))]
    public class TblExaminationsDetailsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblExaminationsDetails/TblExaminationsDetailsIndex.cshtml");
        }
    }
}