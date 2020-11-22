using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    public class TblPrintDetails
    {
        [Key]
        public Int64 PrintId { get; set; }
        public Int64 FeeId { get; set; }
        public DateTime DateTimePrinted { get; set; }
        public String PrintedBy { get; set; }
    }
}