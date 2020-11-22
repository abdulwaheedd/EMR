
namespace EMR.Verifications.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;

    [FormScript("Verifications.Cpatienthistory")]
    [BasedOnRow(typeof(Entities.CpatienthistoryRow), CheckNames = true)]
    public class CpatienthistoryForm
    {
        public Int64 Mrid { get; set; }
        public Int64 VisitId { get; set; }
        public DateTime DateOfVisit { get; set; }
        public String SDateOfVisit { get; set; }
        [LookupEditor(typeof(LkpHistoryRow))]
        public Int32 HistoryId { get; set; }
        [HtmlNoteContentEditor]
        public String Note { get; set; }
    }
}