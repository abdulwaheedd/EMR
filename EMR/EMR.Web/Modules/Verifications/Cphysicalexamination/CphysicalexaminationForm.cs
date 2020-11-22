
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

    [FormScript("Verifications.Cphysicalexamination")]
    [BasedOnRow(typeof(Entities.CphysicalexaminationRow), CheckNames = true)]
    public class CphysicalexaminationForm
    {
        public Int64 Mrid { get; set; }
        public Int64 VisitId { get; set; }
        public DateTime DateOfVisit { get; set; }
        public String SDateOfVisit { get; set; }
        [LookupEditor(typeof(LkpPhysExamGroupRow))]
        public Int32 GroupId { get; set; }
        [LookupEditor(typeof(LkpPhysExamsRow), CascadeField = "GroupId", CascadeFrom = "GroupId")]
        public Int32 PhysExamId { get; set; }
        [HtmlNoteContentEditor]
        public String Note { get; set; }
    }
}