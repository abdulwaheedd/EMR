
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblOccupation")]
    [BasedOnRow(typeof(Entities.TblOccupationRow), CheckNames = true)]
    public class TblOccupationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1,descending:true)]
        public Int32 Oid { get; set; }
        public String OccupationEng { get; set; }
        public String OccupationDari { get; set; }

    }
}