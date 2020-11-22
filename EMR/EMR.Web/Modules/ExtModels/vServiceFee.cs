using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    public class vServiceFee
    {
        [Key]
        public Int64 FeeId { get; set; }
        public Int64 MRID { get; set; }
        public Int32 ServiceId { get; set; }
        public int FacilityID { get; set; }
        public String MRN { get; set; }
        public String PatName { get; set; }
        public String PatFatName { get; set; }
        public DateTime LastUpdated { get; set; }
        public String ServiceDari { get; set; }
        public String UserName { get; set; }
        public Int32 ServiceFee { get; set; }
        public int Times { get; set; }
        [NotMapped]
        public Boolean Print { get; set; }
        public String InvoiceNo { get; set; }
    }
}