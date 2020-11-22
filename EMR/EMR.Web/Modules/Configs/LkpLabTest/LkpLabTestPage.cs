
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Tests"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LkpLabTestRow))]
    public class LkpLabTestController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/LkpLabTest/LkpLabTestIndex.cshtml");
        }
    }
}