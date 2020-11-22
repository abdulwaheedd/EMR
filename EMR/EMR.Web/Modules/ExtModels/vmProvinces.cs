using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    [Table("vmProvince")]
    public class vmProvince
    {
        [Key]
        public string ProvCode { get; set; }
        public string Province { get; set; }
    }
}