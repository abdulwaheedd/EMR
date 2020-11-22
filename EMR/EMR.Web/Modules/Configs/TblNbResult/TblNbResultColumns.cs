
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblNbResult")]
    [BasedOnRow(typeof(Entities.TblNbResultRow), CheckNames = true)]
    public class TblNbResultColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1, descending: true)]
        public Int32 NbResultId { get; set; }
        public String NbResultDari { get; set; }
        public String NbResultPashto { get; set; }
        public String NbResultEn { get; set; }
        [Width(200)]
        public String NbResult { get; set; }
    }
}