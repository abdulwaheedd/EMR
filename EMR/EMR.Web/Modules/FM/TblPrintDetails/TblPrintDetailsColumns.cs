
namespace EMR.FM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("FM.TblPrintDetails")]
    [BasedOnRow(typeof(Entities.TblPrintDetailsRow), CheckNames = true)]
    public class TblPrintDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 PrintId { get; set; }
        public Int64 FeeId { get; set; }
        public DateTime DateTimePrinted { get; set; }
        [EditLink]
        public String PrintedBy { get; set; }
    }
}