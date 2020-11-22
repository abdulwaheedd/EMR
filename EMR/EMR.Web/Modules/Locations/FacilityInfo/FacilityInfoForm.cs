
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
    using EMR.Administration.Entities;

    [FormScript("Locations.FacilityInfo")]
    [BasedOnRow(typeof(Entities.FacilityInfoRow), CheckNames = true)]
    public class FacilityInfoForm
    {
        public Int32? FacilityId { get; set; }
        [LookupEditor(typeof(DistrictsRow))]
        public Int32 DistrictId { get; set; }
        public String FacilityName { get; set; }
        public String FacilityNameDari { get; set; }
        public String FacilityNamePashto { get; set; }
        [LookupEditor(typeof(FacilityTypesRow))]
        public Int32 FacilityType { get; set; }
        public String ViliCode { get; set; }
        public String GrantId { get; set; }
        public Double Lat { get; set; }
        public Double Lon { get; set; }
        public String Implementer { get; set; }
        [LookupEditor(typeof(TenantRow))]
        public Int32 TenantId { get; set; }
    }
}