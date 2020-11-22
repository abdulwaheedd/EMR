
namespace EMR.Pharmacy.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Pharmacy/Medicines"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MedicinesRow))]
    public class MedicinesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Pharmacy/Medicines/MedicinesIndex.cshtml");
        }
    }
}