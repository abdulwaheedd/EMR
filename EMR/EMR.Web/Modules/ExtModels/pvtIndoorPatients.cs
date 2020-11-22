using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    [Table("pvtIndoorPatients")]
    public class pvtIndoorPatients
    {
        [Column(Order =0),Key]
        public string HMIRID { get; set; }
        [Key]
        [Column(Order =1)]
        public int? OrderId { get; set; }
        public string ElementName { get; set; }
        public int Year { get; set; }
        public int Month { get; set; }
        public int FacilityId { get; set; }
        public string FacilityType { get; set; }
        public double? FemaleOver5 { get; set; }
        public double? FemaleUnder5 { get; set; }
        public double? MaleOver5 { get; set; }
        public double? MaleUnder5 { get; set; }
        public double? Total { get; set; }
        public string FacilityName { get; set; }
        public string District { get; set; }
        public string Province { get; set; }
    }
}