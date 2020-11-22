using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    [Table("vmYears")]
    public class vmYears
    {
        [Key]
        public int YearId { get; set; }
        public string Year { get; set; }
    }
}