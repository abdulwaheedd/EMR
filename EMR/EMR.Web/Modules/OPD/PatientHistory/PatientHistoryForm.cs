
namespace EMR.OPD.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;

    [FormScript("OPD.PatientHistory")]
    [BasedOnRow(typeof(Entities.PatientHistoryRow), CheckNames = true)]
    public class PatientHistoryForm
    {
        public Int64 VisitId { get; set; }
        [LookupEditor(typeof(LkpHistoryRow))]
        public Int32 HistoryId { get; set; }
        [HtmlNoteContentEditor]
        public String Note { get; set; }
    }
}