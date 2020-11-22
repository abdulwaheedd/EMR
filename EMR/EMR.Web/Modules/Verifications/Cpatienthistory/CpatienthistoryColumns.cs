
namespace EMR.Verifications.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Verifications.Cpatienthistory")]
    [BasedOnRow(typeof(Entities.CpatienthistoryRow), CheckNames = true)]
    public class CpatienthistoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [Width(100)]
        public Int64 VisitId { get; set; }
        [Width(150)]
        public DateTime DateOfVisit { get; set; }
        [Width(150)]
        public String SDateOfVisit { get; set; }
        [EditLink, Width(300)]
        public string HistoryName { get; set; }
        [Width(500)]
        public String Note { get; set; }
    }
}