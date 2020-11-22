
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Professions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblProfessionsRow))]
    public class TblProfessionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblProfessions/TblProfessionsIndex.cshtml");
        }
    }
}