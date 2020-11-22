
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Education"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblEducationRow))]
    public class TblEducationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblEducation/TblEducationIndex.cshtml");
        }
    }
}