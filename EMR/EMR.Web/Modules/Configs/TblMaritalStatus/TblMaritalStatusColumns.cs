
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblMaritalStatus")]
    [BasedOnRow(typeof(Entities.TblMaritalStatusRow), CheckNames = true)]
    public class TblMaritalStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1,descending:true)]
        public Int32 MariId { get; set; }
        public String PatMaritalStatusEng { get; set; }
        public String PatMaritalStatusDari { get; set; }
        public String MaritalStatus { get; set; }
    }
}