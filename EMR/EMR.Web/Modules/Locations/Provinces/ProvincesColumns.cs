
namespace EMR.Locations.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Locations.Provinces")]
    [BasedOnRow(typeof(Entities.ProvincesRow), CheckNames = true)]
    public class ProvincesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1,descending:true)]
        public Int32 ProvinceId { get; set; }
        public String ProvinceEng { get; set; }
        public String ProvinceDari { get; set; }
        public String ProvincePashto { get; set; }
        public String ProvinceName { get; set; }
        [Width(200)]
        public Int32 ProvPop { get; set; }
        [Width(200)]
        public String ProvinceAbbrv { get; set; }
    }
}