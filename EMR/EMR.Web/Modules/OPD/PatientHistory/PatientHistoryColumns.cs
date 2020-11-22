
namespace EMR.OPD.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OPD.PatientHistory")]
    [BasedOnRow(typeof(Entities.PatientHistoryRow), CheckNames = true)]
    public class PatientHistoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, SortOrder(1, descending: true)]
        public Int64 Id { get; set; }
        [EditLink,Width(300)]
        public string HistoryName { get; set; }
        [Width(500)]
        public String Note { get; set; }
    }
}