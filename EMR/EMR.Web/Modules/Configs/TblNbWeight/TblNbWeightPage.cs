
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/NbWeight"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblNbWeightRow))]
    public class TblNbWeightController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblNbWeight/TblNbWeightIndex.cshtml");
        }
    }
}