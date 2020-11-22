using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    [Table("HMIRMain")]
    public class HMIRMain
    {
        [Key]
        public String HMIRID { get; set; }
        public int FacilityID { get; set; }
        public String FacilityName { get; set; }
        public String FacilityNameDari { get; set; }
        public String FacilityNamePashto { get; set; }
        public String FacType { get; set; }
        public String FacTypeDari { get; set; }
        public String FacTypePashto { get; set; }
        public String District { get; set; }
        public String DistrictDari { get; set; }
        public String DistrictPashto { get; set; }
        public String Province { get; set; }
        public String  ProvinceNameDari { get; set; }
        public String ProveNamePashto { get; set; }
        public int Year { get; set; }
        public int Month { get; set; }
    }
}