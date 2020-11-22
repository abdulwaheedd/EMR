
namespace EMR.Verifications.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Verifications/Cphysicalexamination"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CphysicalexaminationRow))]
    public class CphysicalexaminationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Verifications/Cphysicalexamination/CphysicalexaminationIndex.cshtml");
        }
    }
}