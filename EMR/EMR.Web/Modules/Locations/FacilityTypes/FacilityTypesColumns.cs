
namespace EMR.Locations.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Locations.FacilityTypes")]
    [BasedOnRow(typeof(Entities.FacilityTypesRow), CheckNames = true)]
    public class FacilityTypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1,descending:true)]
        public Int32 FacTypeCode { get; set; }
        [Width(250)]
        public String FacType { get; set; }
        [Width(250)]
        public String FacTypeDari { get; set; }
        [Width(250)]
        public String FacTypePashto { get; set; }
    }
}