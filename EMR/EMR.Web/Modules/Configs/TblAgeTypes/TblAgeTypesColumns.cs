
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblAgeTypes")]
    [BasedOnRow(typeof(Entities.TblAgeTypesRow), CheckNames = true)]
    public class TblAgeTypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1, descending: true)]
        public Int32 AgetypeId { get; set; }
        public String AgeTypeNameEn { get; set; }
        public String AgeTypeNameDari { get; set; }
        [Width(200)]
        public String AgeTypeNamePashto { get; set; }
        public String AgeTypeName { get; set; }
    }
}