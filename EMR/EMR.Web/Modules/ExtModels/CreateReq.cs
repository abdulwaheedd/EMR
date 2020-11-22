using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    public class CreateReq
    {
        [RequiredAttribute]
        [Display(Name = "Province")]
        public string ProvCode { get; set; }

        [RequiredAttribute]
        public int Year { get; set; }
        public int FacilityId { get; set; }
    }
}