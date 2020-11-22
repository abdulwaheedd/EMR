using EMR.Modules.ExtModels;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace EMR.Controllers
{
    [Serenity.Web.PageAuthorize()]
    [RoutePrefix("FM/ServiceFee"), Route("{action=index}")]
    public class ServiceFeeController : Controller
    {
        private readonly EmrDbContext _context;
        public ServiceFeeController()
        {
            _context = new EmrDbContext();
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Add(Int64? id)
        {
            TempData["Mrid"] = Request.QueryString["id"];
            var ServiceDataList = _context.Services.Select(m => new
            {
                ServiceId = m.ServiceId,
                ServiceName = m.ServiceDari + " - " + m.ServicePashto + " - " + m.ServiceEn
            }).ToList();

            ViewBag.ServiceList = new SelectList(ServiceDataList, "ServiceId", "ServiceName");

            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Add(ServiceFee serviceFee)
        {

            string userName = Serenity.Authorization.Username;

            var servicePrice = _context.Services.Where(m => m.ServiceId == serviceFee.ServiceId).Select(n => new
            {
                ServicePrice = n.ServicePrice
            }).FirstOrDefault();

            var ServiceDataList = _context.Services.Select(m => new
            {
                ServiceId = m.ServiceId,
                ServiceName = m.ServiceDari + " - " + m.ServicePashto + " - " + m.ServiceEn
            }).ToList();

            var myServiceFee = new ServiceFee();

            DateTime dateTime;
            dateTime = DateTime.Now.Date;

            if (ModelState.IsValid)
            {
                try
                {
                    myServiceFee.Mrid = Convert.ToInt64(TempData["Mrid"]);
                    myServiceFee.ServiceId = serviceFee.ServiceId;
                    myServiceFee.ServiceFees = (int)servicePrice.ServicePrice;
                    myServiceFee.DateCreated = DateTime.Now;
                    myServiceFee.UserName = userName;
                    myServiceFee.LastUpdated = DateTime.Now;
                    myServiceFee.Times = 0;
                    _context.ServiceFees.Add(myServiceFee);
                    _context.SaveChanges();
                    return Redirect("/FM/UFPatients#edit/" + TempData["Mrid"]);
                }
                catch (Exception)
                {
                    throw;
                }

            }
            ViewBag.ServiceList = new SelectList(ServiceDataList, "ServiceId", "ServiceName", serviceFee.ServiceId);
            return View();
        }

        public ActionResult Edit(Int64? id)
        {
            if(id==null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            TempData["FeeId"] = id;


            var ServiceDataList = _context.Services.Select(m => new
            {
                ServiceId = m.ServiceId,
                ServiceName = m.ServiceDari + " - " + m.ServicePashto + " - " + m.ServiceEn
            }).ToList();



            vServiceFee serviceFees = _context.vServiceFee.Find(id);
            if (serviceFees == null)
            {
                return HttpNotFound();
            }
            ViewBag.ServiceList = new SelectList(ServiceDataList, "ServiceId", "ServiceName",serviceFees.ServiceId);
            return View(serviceFees);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(ServiceFeeModel feeModel)
        {
            var ServiceDataList = _context.Services.Select(m => new
            {
                ServiceId = m.ServiceId,
                ServiceName = m.ServiceDari + " - " + m.ServicePashto + " - " + m.ServiceEn
            }).ToList();


            var PrintDetails = new TblPrintDetails();
            PrintDetails.PrintedBy = Serenity.Authorization.Username;
            PrintDetails.FeeId = feeModel.FeeId;
            PrintDetails.DateTimePrinted = DateTime.Now;


            ServiceFee serviceFee = _context.ServiceFees.Find(TempData["FeeId"]);
            serviceFee.Times = serviceFee.Times+1;
            if (ModelState.IsValid)
            {
                if (feeModel.Print ==true)
                {
                    _context.TblPrintDetails.Add(PrintDetails);
                }
                _context.Entry(serviceFee).State = EntityState.Modified;
                _context.SaveChanges();
                return Redirect("/FM/UFPatients#edit/" + serviceFee.Mrid);
                //return RedirectToAction(nameof(Edit));
            }
            ViewBag.ServiceList = new SelectList(ServiceDataList, "ServiceId", "ServiceName", serviceFee.ServiceId);
            return View(serviceFee);
        }

        public ActionResult Main(ServiceFeeModel feeModel)
        {
            ServiceFee serviceFee = _context.ServiceFees.Find(TempData["FeeId"]);

            return Redirect("/FM/UFPatients#edit/" + serviceFee.Mrid);
        }
    }
}