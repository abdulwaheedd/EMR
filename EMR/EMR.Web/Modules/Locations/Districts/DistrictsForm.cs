
namespace EMR.Locations.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Locations.Entities;

    [FormScript("Locations.Districts")]
    [BasedOnRow(typeof(Entities.DistrictsRow), CheckNames = true)]
    public class DistrictsForm
    {
        public Int32? DistrictId { get; set; }
        public String DistrictEng { get; set; }
        public String DistrictDari { get; set; }
        public String DistrictPashto { get; set; }
        [LookupEditor(typeof(ProvincesRow))]
        public Int32? ProvinceId { get; set; }
    }
}