
namespace EMR.Regs.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Regs/Referrals"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblReferralRow))]
    public class TblReferralController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Regs/TblReferral/TblReferralIndex.cshtml");
        }
    }
}