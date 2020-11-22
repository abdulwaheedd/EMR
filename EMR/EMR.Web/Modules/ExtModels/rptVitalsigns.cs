using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    [Table("VitalSigns")]
    public class rptVitalsigns
    {
        [Key]
        public int VitalId { get; set; }
        public Int64 VisitId { get; set; }
        public int Pulse { get; set; }
        public int RR { get; set; }
        public int Temp { get; set; }
        public string BP { get; set; }
        public int Weight { get; set; }
        public int Height { get; set; }
        public int HR { get; set; }
        public int O2 { get; set; }
        public int Pain { get; set; }
    }
}