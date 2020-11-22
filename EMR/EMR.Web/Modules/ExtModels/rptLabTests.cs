using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    [Table("rptLabTests")]
    public class rptLabTests
    {
        [Key]
        public Int64 Id { get; set; }
        public Int64 VisitId { get; set; }
        public string TestName { get; set; }
        public string NormalRange { get; set; }
        public string Unit { get; set; }
        public string TypeName { get; set; }
        public string Result { get; set; }
    }
}