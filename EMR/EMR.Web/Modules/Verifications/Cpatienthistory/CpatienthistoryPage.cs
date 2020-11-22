
namespace EMR.Verifications.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Verifications/Cpatienthistory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CpatienthistoryRow))]
    public class CpatienthistoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Verifications/Cpatienthistory/CpatienthistoryIndex.cshtml");
        }
    }
}