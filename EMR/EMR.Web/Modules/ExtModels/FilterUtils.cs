using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    public class hmirreportfilter
    {
        [RequiredAttribute]
        [Display(Name = "Hospital")]
        public int FacilityId { get; set; }

        [RequiredAttribute]
        [Display(Name = "Year")]
        public int Year { get; set; }

        [RequiredAttribute]
        [Display(Name = "Month")]
        public int Month { get; set; }
    }
}