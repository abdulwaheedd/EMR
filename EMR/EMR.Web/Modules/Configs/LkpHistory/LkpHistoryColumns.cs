
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.LkpHistory")]
    [BasedOnRow(typeof(Entities.LkpHistoryRow), CheckNames = true)]
    public class LkpHistoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 HistoryId { get; set; }
        [EditLink]
        public String HistoryName { get; set; }
    }
}