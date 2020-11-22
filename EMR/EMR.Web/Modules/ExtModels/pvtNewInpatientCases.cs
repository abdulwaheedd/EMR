using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    [Table("pvtNewInpatientCases")]
    public class pvtNewInpatientCases
    {
        [Key]
        [Column(Order = 1)]
        public string HMIRID { get; set; }
        [Key]
        [Column(Order = 2)]
        public int? OrderId { get; set; }
        public int Year { get; set; }
        public int Month { get; set; }
        public int FacilityId { get; set; }

        public double? Deaths { get; set; }
        public double? FemaleOver5 { get; set; }
        public double? FemaleUnder5 { get; set; }
        public double? MaleOver5 { get; set; }
        public double? MaleUnder5 { get; set; }
        public double? ReferredIn { get; set; }
        public double? ReferredOut { get; set; }
        public string ElementName { get; set; }
        public double? Total { get; set; }
        public string FacilityName { get; set; }
        public string FacilityType { get; set; }
        public string District { get; set; }
        public string Province { get; set; }
    }
}