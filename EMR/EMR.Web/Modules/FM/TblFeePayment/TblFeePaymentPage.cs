
namespace EMR.FM.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("FM/Fee"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TblFeePaymentRow))]
    public class TblFeePaymentController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/FM/TblFeePayment/TblFeePaymentIndex.cshtml");
        }
    }
}