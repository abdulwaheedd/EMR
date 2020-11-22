
namespace EMR.FM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("FM.LkpServiceTypes")]
    [BasedOnRow(typeof(Entities.LkpServiceTypesRow), CheckNames = true)]
    public class LkpServiceTypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,SortOrder(1,descending:false)]
        public Int32 ServiceTypeId { get; set; }
        [EditLink]
        [Width(200)]
        public String ServiceTypeDari { get; set; }
        [EditLink]
        [Width(200)]
        public String ServiceTypePashto { get; set; }
        [Width(200)]
        public String ServiceTypeEn { get; set; }
        [Width(400)]
        public String ServiceType { get; set; }
    }
}