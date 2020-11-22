
namespace EMR.Imaging.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Imaging/ImagePatients"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ImagePatientsRow))]
    public class ImagePatientsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Imaging/ImagePatients/ImagePatientsIndex.cshtml");
        }
    }
}