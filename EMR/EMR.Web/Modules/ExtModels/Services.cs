using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    [Table("LkpServices")]
    public class Services
    {
        [Key]
        public Int32 ServiceId { get; set; }
        public Int32 ServiceTypeId { get; set; }
        public String ServiceDari { get; set; }
        public String ServicePashto { get; set; }
        public String ServiceEn { get; set; }
        public Double ServicePrice { get; set; }
        public Double DiscountRate { get; set; }
        public Boolean Status { get; set; }
    }
}