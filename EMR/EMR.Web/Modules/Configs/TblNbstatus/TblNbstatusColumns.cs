
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblNbstatus")]
    [BasedOnRow(typeof(Entities.TblNbstatusRow), CheckNames = true)]
    public class TblNbstatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1, descending: true)]
        public Int32 NbstatusId { get; set; }
        public String NbstatusDari { get; set; }
        public String NbstatusPashto { get; set; }

        public String NbstatusEng { get; set; }
        [Width(200)]
        public String NbStatus { get; set; }
    }
}