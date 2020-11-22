
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Gender"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblGenderRow))]
    public class TblGenderController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblGender/TblGenderIndex.cshtml");
        }
    }
}