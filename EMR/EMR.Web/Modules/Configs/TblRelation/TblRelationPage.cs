
namespace EMR.Configs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Configs/Relation"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblRelationRow))]
    public class TblRelationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Configs/TblRelation/TblRelationIndex.cshtml");
        }
    }
}