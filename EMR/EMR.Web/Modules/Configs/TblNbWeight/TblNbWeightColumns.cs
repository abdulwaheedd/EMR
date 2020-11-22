
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblNbWeight")]
    [BasedOnRow(typeof(Entities.TblNbWeightRow), CheckNames = true)]
    public class TblNbWeightColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1, descending: true)]
        public Int32 NbWeightId { get; set; }
        public String NbWeightDari { get; set; }
        public String NbWeightPashto { get; set; }
        public String NbWeightEn { get; set; }
        [Width(200)]
        public String NbWeight { get; set; }
    }
}