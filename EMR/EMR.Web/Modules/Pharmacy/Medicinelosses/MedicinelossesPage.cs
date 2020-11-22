
namespace EMR.Pharmacy.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Pharmacy/Exclusion"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MedicinelossesRow))]
    public class MedicinelossesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Pharmacy/Medicinelosses/MedicinelossesIndex.cshtml");
        }
    }
}