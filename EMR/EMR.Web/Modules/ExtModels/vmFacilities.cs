using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    [Table("vmFacilities")]
    public class vmFacilities
    {
        [Key]
        public int FacilityId { get; set; }
        public string FacilityName { get; set; }
        public string ProvCode { get; set; }
    }
}