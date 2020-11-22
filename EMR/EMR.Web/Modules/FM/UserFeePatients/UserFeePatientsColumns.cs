
namespace EMR.FM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("FM.UserFeePatients")]
    [BasedOnRow(typeof(Entities.UserFeePatientsRow), CheckNames = true)]
    public class UserFeePatientsColumns
    {
        [Width(60)]
        [UrlFormatter(DisplayFormat ="Edit",UrlFormat = "~/FM/UFPatients#edit/{0}"), DisplayName("Action")]
        public Int64 Mrid { get; set; }
        [EditLink]
        [Width(150)]
        public String Mrn { get; set; }
        [Width(100)]
        public Int32 FacilityId { get; set; }
        [Width(200)]
        public String FacilityFacilityNameDari { get; set; }
        [Width(150)]
        public String PatName { get; set; }
        [Width(150)]
        public String PatFatName { get; set; }
        [Width(200)]
        public String Gender { get; set; }
        [Width(150)]
        public String PatRealationName { get; set; }
        [SortOrder(1,descending:true)]
        public DateTime LastUpdated { get; set; }
    }
}