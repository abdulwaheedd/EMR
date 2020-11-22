
namespace EMR.Locations.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Locations.FacilityInfo")]
    [BasedOnRow(typeof(Entities.FacilityInfoRow), CheckNames = true)]
    public class FacilityInfoColumns
    {
        [EditLink, DisplayName("Facility ID"), AlignRight,Width(100)]
        [SortOrder(1, descending: true)]
        public Int32 FacilityId { get; set; }
        public String FacilityName { get; set; }
        public String FacilityNameDari { get; set; }
        public String FacilityNamePashto { get; set; }

        [Width(150)]
        public String FacilityTypeFacTypeDari { get; set; }
        [Width(120)]
        public String ViliCode { get; set; }
        [Width(120)]
        public String DistrictDari { get; set; }
        [Width(120)]
        public String GrantId { get; set; }
        public Double Lat { get; set; }
        public Double Lon { get; set; }
        [Width(120)]
        public String Implementer { get; set; }
        [Width(100)]
        public String ProvinAbbrv { get; set; }
    }
}