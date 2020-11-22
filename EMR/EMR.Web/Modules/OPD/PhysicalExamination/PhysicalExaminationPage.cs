
namespace EMR.OPD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OPD/PhysicalExamination"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PhysicalExaminationRow))]
    public class PhysicalExaminationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OPD/PhysicalExamination/PhysicalExaminationIndex.cshtml");
        }
    }
}