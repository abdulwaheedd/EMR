
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Diseases"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblWardDiseasesRow))]
    public class TblWardDiseasesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblWardDiseases/TblWardDiseasesIndex.cshtml");
        }
    }
}