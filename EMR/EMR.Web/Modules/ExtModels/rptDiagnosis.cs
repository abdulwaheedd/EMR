using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    [Table("rptDiagnosis")]
    public class rptDiagnosis
    {
        [Key]
        public Int64 Id { get; set; }
        public Int64 VisitId { get; set; }
        public string SelfDiagnosis { get; set; }
        public string InitialDiagnosis { get; set; }
        public string FinalDiagnosis { get; set; }
        public string Comorbidity { get; set; }
        public string TopographyMName { get; set; }
        public string TopographySName { get; set; }
    }
}