
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Category"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblDiseasesCategoryRow))]
    public class TblDiseasesCategoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblDiseasesCategory/TblDiseasesCategoryIndex.cshtml");
        }
    }
}