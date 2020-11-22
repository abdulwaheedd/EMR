
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Ethnicity"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EthnicityRow))]
    public class EthnicityController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/Ethnicity/EthnicityIndex.cshtml");
        }
    }
}