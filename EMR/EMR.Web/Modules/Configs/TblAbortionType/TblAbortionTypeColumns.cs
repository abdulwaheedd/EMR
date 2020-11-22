
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblAbortionType")]
    [BasedOnRow(typeof(Entities.TblAbortionTypeRow), CheckNames = true)]
    public class TblAbortionTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1,descending:true)]
        public Int32 AbortionId { get; set; }
        [EditLink]
        public String AbortionTypeDari { get; set; }
        public String AbortionTypePashto { get; set; }
        public String AbortionTypeEn { get; set; }
    }
}