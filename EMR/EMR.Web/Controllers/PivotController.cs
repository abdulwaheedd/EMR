using EMR.Modules.ExtModels;
using Serenity.Web;
using Syncfusion.XlsIO;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace EMR.Controllers
{
    [RoutePrefix("Pivot"), Route("{action=index}")]
    [PageAuthorize()]
    public class PivotController : Controller
    {
        EmrDbContext _context= new EmrDbContext();    
        public ActionResult Index()
        {
            //Province list
            List<vmProvince> Provinces = _context.VmProvinces.ToList();
            Provinces.Insert(0, new vmProvince { ProvCode = "", Province = "All" });
            ViewData["ProvCode"] = new SelectList(Provinces, "ProvCode", "Province");


            List<vmFacilities> Facilities = _context.VmFacilities.ToList();
            Facilities.Insert(0, new vmFacilities { FacilityId =0, FacilityName = "All"});
            ViewData["FacilityId"] = new SelectList(Facilities, "FacilityId", "FacilityName");

            //Years list
            List<vmYears> Years = _context.VmYears.ToList();
            Years.Insert(0, new vmYears { YearId = 0, Year = "All" });
            ViewData["Year"] = new SelectList(Years, "YearId", "Year");

            return View();
        }

        public JsonResult facilities(string ProvCode)
        {
            List<vmFacilities> facilities = new List<vmFacilities>();
            facilities = (from fac in _context.VmFacilities where fac.ProvCode.Contains(ProvCode) select fac).ToList();
            facilities.Insert(0, new vmFacilities { FacilityId = 0, FacilityName = "All" });
            return Json(new SelectList(facilities, "FacilityId", "FacilityName"),JsonRequestBehavior.AllowGet);
        }
        public ActionResult pivotNewInpatients([Bind(Include = "ProvCode,FacilityId,Year")] CreateReq req)
        {
            string ProvinceCode;
            int FacilityId, Year;

            ProvinceCode = req.ProvCode;
            FacilityId = req.FacilityId;
            Year = req.Year;

            var data = _context.PvtNewInpatientCases.AsNoTracking().ToList();

            if (ProvinceCode!="" && FacilityId!=0 && Year!=0)
            {
                data = _context.PvtNewInpatientCases.AsNoTracking().Where(m=>m.Year.Equals(Year) && m.Province.Equals(ProvinceCode) && m.FacilityId.Equals(FacilityId)).ToList();
            }
            else if(ProvinceCode!="" & FacilityId!=0)
            {
                data = _context.PvtNewInpatientCases.AsNoTracking().Where(m=>m.Province.Equals(ProvinceCode) && m.FacilityId.Equals(FacilityId)).ToList();

            }
            else if(ProvinceCode!="" && Year!=0)
            {
                data = _context.PvtNewInpatientCases.AsNoTracking().Where(m => m.Province.Equals(ProvinceCode) && m.Year.Equals(Year)).ToList();

            }
            else if (ProvinceCode != "")
            {
                data = _context.PvtNewInpatientCases.AsNoTracking().Where(m => m.Province.Equals(ProvinceCode)).ToList();

            }
            else if(FacilityId!=0 && Year!=0)
            {
                data = _context.PvtNewInpatientCases.AsNoTracking().Where(m => m.FacilityId.Equals(FacilityId) && m.Year.Equals(Year)).ToList();
            }
            else if (FacilityId != 0)
            {
                data = _context.PvtNewInpatientCases.AsNoTracking().Where(m => m.FacilityId.Equals(FacilityId)).ToList();
            }
            else if (Year != 0)
            {
                data = _context.PvtNewInpatientCases.AsNoTracking().Where(m => m.Year.Equals(Year)).ToList();
            }
            ExcelEngine excelEngine = new ExcelEngine();

            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Excel2013;

            IWorkbook workbook = application.Workbooks.Create(2);

            IWorksheet sheet = workbook.Worksheets[0];
            sheet.ImportData(data, 1, 1, true);
            sheet.Name = "Data";
            IWorksheet pivotSheet = workbook.Worksheets[1];

            pivotSheet.Name = "PivotTable";

            pivotSheet["A2"].Text = "HMIR New Inpatient Cases";
            pivotSheet.Range["A2"].CellStyle.Font.Size = 14f;
            pivotSheet.Range["A2"].CellStyle.Font.Bold = true;
            pivotSheet.Range["A3"].Text = "Date extracted: " + DateTime.Now.ToString(); ;
            pivotSheet.Range["A3"].CellStyle.Font.Size = 10f;
            pivotSheet.Range["A3"].CellStyle.Font.Bold = true;
            pivotSheet.Range["A3"].CellStyle.Font.Italic = true;

            if (sheet == null)
            {
                ModelState.AddModelError("Error", "There was error in selection or there is no data for the selected criteria");
                return RedirectToAction("Index");
            }

            IPivotCache cash_data = workbook.PivotCaches.Add(sheet.UsedRange);
            IPivotTable pivotTable = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet["A5"], cash_data);

            IPivotTableOptions options = pivotTable.Options;
            options.ShowFieldList = false;

            pivotTable.Fields["District"].Axis = PivotAxisTypes.Page;
            pivotTable.Fields["Province"].Axis = PivotAxisTypes.Page;
            pivotTable.Fields["FacilityId"].Axis = PivotAxisTypes.Page;
            pivotTable.Fields["FacilityName"].Axis = PivotAxisTypes.Page;
            pivotTable.Fields["FacilityType"].Axis = PivotAxisTypes.Page;
            pivotTable.Fields["Year"].Axis = PivotAxisTypes.Page;
            pivotTable.Fields["Month"].Axis = PivotAxisTypes.Page;
            pivotTable.Fields["ElementName"].Axis = PivotAxisTypes.Row;

            IPivotField FemaleOver5 = pivotTable.Fields["FemaleOver5"];
            IPivotField FemaleUnder5 = pivotTable.Fields["FemaleUnder5"];
            IPivotField MaleOver5 = pivotTable.Fields["MaleOver5"];
            IPivotField MaleUnder5 = pivotTable.Fields["MaleUnder5"];
            IPivotField ReferreddIn = pivotTable.Fields["ReferredIn"];
            IPivotField ReferredOut = pivotTable.Fields["ReferredOut"];
            IPivotField Deaths = pivotTable.Fields["Deaths"];
            IPivotField Total = pivotTable.Fields["Total"];

            pivotTable.DataFields.Add(FemaleOver5, "FO5", PivotSubtotalTypes.Sum);
            pivotTable.DataFields.Add(FemaleUnder5, "FU5", PivotSubtotalTypes.Sum);
            pivotTable.DataFields.Add(MaleOver5, "MO5", PivotSubtotalTypes.Sum);
            pivotTable.DataFields.Add(MaleUnder5, "MU5", PivotSubtotalTypes.Sum);
            pivotTable.DataFields.Add(ReferreddIn, "ReferIns", PivotSubtotalTypes.Sum);
            pivotTable.DataFields.Add(ReferredOut, "ReferOuts", PivotSubtotalTypes.Sum);
            pivotTable.DataFields.Add(Deaths, "Deaths", PivotSubtotalTypes.Sum);
            pivotTable.DataFields.Add(Total, "Total", PivotSubtotalTypes.Sum);

            IPivotTableOptions option = pivotTable.Options;
            option.ErrorString = "X";
            pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleDark20;
            pivotSheet.Activate();

            string ContentType = "Application/msexcel";
            string filename = "HMIR_" + "NewInpatientCases" + "_" + DateTime.Now.Year + "_" + DateTime.Now.Month + "_" + DateTime.Now.Day + ".xlsx";

            MemoryStream ms = new MemoryStream();
            workbook.SaveAs(ms);
            ms.Position = 0;
            workbook.Close();
            excelEngine.Dispose();
            return File(ms, ContentType, filename);
        }

        public ActionResult pivotIndoorPatients([Bind(Include = "ProvCode,FacilityId,Year")] CreateReq req)
        {
            string ProvinceCode;
            int FacilityId, Year;

            ProvinceCode = req.ProvCode;
            FacilityId = req.FacilityId;
            Year = req.Year;

            var data = _context.PvtNewInpatientCases.AsNoTracking().ToList();

            if (ProvinceCode != "" && FacilityId != 0 && Year != 0)
            {
                data = _context.PvtNewInpatientCases.AsNoTracking().Where(m => m.Year.Equals(Year) && m.Province.Equals(ProvinceCode) && m.FacilityId.Equals(FacilityId)).ToList();
            }
            else if (ProvinceCode != "" & FacilityId != 0)
            {
                data = _context.PvtNewInpatientCases.AsNoTracking().Where(m => m.Province.Equals(ProvinceCode) && m.FacilityId.Equals(FacilityId)).ToList();

            }
            else if (ProvinceCode != "" && Year != 0)
            {
                data = _context.PvtNewInpatientCases.AsNoTracking().Where(m => m.Province.Equals(ProvinceCode) && m.Year.Equals(Year)).ToList();

            }
            else if (ProvinceCode != "")
            {
                data = _context.PvtNewInpatientCases.AsNoTracking().Where(m => m.Province.Equals(ProvinceCode)).ToList();

            }
            else if (FacilityId != 0 && Year != 0)
            {
                data = _context.PvtNewInpatientCases.AsNoTracking().Where(m => m.FacilityId.Equals(FacilityId) && m.Year.Equals(Year)).ToList();
            }
            else if (FacilityId != 0)
            {
                data = _context.PvtNewInpatientCases.AsNoTracking().Where(m => m.FacilityId.Equals(FacilityId)).ToList();
            }
            else if (Year != 0)
            {
                data = _context.PvtNewInpatientCases.AsNoTracking().Where(m => m.Year.Equals(Year)).ToList();
            }
            ExcelEngine excelEngine = new ExcelEngine();

            IApplication application = excelEngine.Excel;
            application.DefaultVersion = ExcelVersion.Excel2013;

            IWorkbook workbook = application.Workbooks.Create(2);

            IWorksheet sheet = workbook.Worksheets[0];
            sheet.ImportData(data, 1, 1, true);
            sheet.Name = "Data";
            IWorksheet pivotSheet = workbook.Worksheets[1];

            pivotSheet.Name = "PivotTable";

            pivotSheet["A2"].Text = "HMIR Indoor Patients";
            pivotSheet.Range["A2"].CellStyle.Font.Size = 14f;
            pivotSheet.Range["A2"].CellStyle.Font.Bold = true;
            pivotSheet.Range["A3"].Text = "Date extracted: " + DateTime.Now.ToString(); ;
            pivotSheet.Range["A3"].CellStyle.Font.Size = 10f;
            pivotSheet.Range["A3"].CellStyle.Font.Bold = true;
            pivotSheet.Range["A3"].CellStyle.Font.Italic = true;

            if (sheet == null)
            {
                ModelState.AddModelError("Error", "There was error in selection or there is no data for the selected criteria");
                return RedirectToAction("Index");
            }

            IPivotCache cash_data = workbook.PivotCaches.Add(sheet.UsedRange);
            IPivotTable pivotTable = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet["A5"], cash_data);

            IPivotTableOptions options = pivotTable.Options;
            options.ShowFieldList = false;
            
            pivotTable.Fields["District"].Axis = PivotAxisTypes.Page;
            pivotTable.Fields["Province"].Axis = PivotAxisTypes.Page;
            pivotTable.Fields["FacilityId"].Axis = PivotAxisTypes.Page;
            pivotTable.Fields["FacilityName"].Axis = PivotAxisTypes.Page;
            pivotTable.Fields["FacilityType"].Axis = PivotAxisTypes.Page;
            pivotTable.Fields["Year"].Axis = PivotAxisTypes.Page;
            pivotTable.Fields["Month"].Axis = PivotAxisTypes.Page;
            pivotTable.Fields["ElementName"].Axis = PivotAxisTypes.Row;

            IPivotField FemaleOver5 = pivotTable.Fields["FemaleOver5"];
            IPivotField FemaleUnder5 = pivotTable.Fields["FemaleUnder5"];
            IPivotField MaleOver5 = pivotTable.Fields["MaleOver5"];
            IPivotField MaleUnder5 = pivotTable.Fields["MaleUnder5"];
            IPivotField Total = pivotTable.Fields["Total"];

            pivotTable.DataFields.Add(FemaleOver5, "FO5", PivotSubtotalTypes.Sum);
            pivotTable.DataFields.Add(FemaleUnder5, "FU5", PivotSubtotalTypes.Sum);
            pivotTable.DataFields.Add(MaleOver5, "MO5", PivotSubtotalTypes.Sum);
            pivotTable.DataFields.Add(MaleUnder5, "MU5", PivotSubtotalTypes.Sum);
            pivotTable.DataFields.Add(Total, "Total", PivotSubtotalTypes.Sum);

            IPivotTableOptions option = pivotTable.Options;
            option.ErrorString = "X";
            pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleDark20;
            pivotSheet.Activate();

            string ContentType = "Application/msexcel";
            string filename = "HMIR_" + "IndoorPatients" + "_" + DateTime.Now.Year + "_" + DateTime.Now.Month + "_" + DateTime.Now.Day + ".xlsx";

            MemoryStream ms = new MemoryStream();
            workbook.SaveAs(ms);
            ms.Position = 0;
            workbook.Close();
            excelEngine.Dispose();
            return File(ms, ContentType, filename);
        }
    }
}
