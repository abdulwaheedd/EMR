
namespace EMR.Locations.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Locations.Districts")]
    [BasedOnRow(typeof(Entities.DistrictsRow), CheckNames = true)]
    public class DistrictsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1,descending:true)]
        public Int32 DistrictId { get; set; }
        public String DistrictEng { get; set; }
        public String DistrictDari { get; set; }
        public String DistrictPashto { get; set; }
        public String DistrictName { get; set; }
        public String ProvinceEng { get; set; }
        public String ProvinceDari { get; set; }
        public String ProvincePashto { get; set; }
    }
}