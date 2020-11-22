
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Depts"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblDeptRow))]
    public class TblDeptController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblDept/TblDeptIndex.cshtml");
        }
    }
}