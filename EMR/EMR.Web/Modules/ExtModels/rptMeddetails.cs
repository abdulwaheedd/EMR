using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    public class rptMeddetails
    {
        [Key]
        public Int64 OrderId { get; set; }
        public Int64 VisitId { get; set; }
        public String PatientName { get; set; }
        public String FatherName { get; set; }
        public String MRN { get; set; }
        public String DateOfVisit { get; set; }
        public String PhoneNumber { get; set; }
        public String GenderEng { get; set; }
        public String Medicine { get; set; }
        public Int32 Quantity { get; set; }
        public String DailyDose { get; set; }
        public String Comment { get; set; }
        public String InsideSale { get; set; }
        public string PhysicianName { get; set; }
        public DateTime Updated { get; set; }
    }
}