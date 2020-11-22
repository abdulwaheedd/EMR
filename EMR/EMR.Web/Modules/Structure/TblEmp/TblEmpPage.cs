
namespace EMR.Structure.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Structure/Staff"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblEmpRow))]
    public class TblEmpController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Structure/TblEmp/TblEmpIndex.cshtml");
        }
    }
}