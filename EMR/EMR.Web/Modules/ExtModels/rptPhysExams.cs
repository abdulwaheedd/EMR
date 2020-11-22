using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    [Table("rptPhysExams")]
    public class rptPhysExams
    {
        [Key]
        public Int64 Id { get; set; }
        public Int64 VisitId { get; set; }
        public string PhysExamName { get; set; }
        public string Note { get; set; }
    }
}