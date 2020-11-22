
namespace EMR.FM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("FM/TblPrintDetails"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblPrintDetailsRow))]
    public class TblPrintDetailsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/FM/TblPrintDetails/TblPrintDetailsIndex.cshtml");
        }
    }
}