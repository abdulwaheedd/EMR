
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

    [FormScript("OPD.PhysicalExamination")]
    [BasedOnRow(typeof(Entities.PhysicalExaminationRow), CheckNames = true)]
    public class PhysicalExaminationForm
    {
        public Int64 VisitId { get; set; }
        [HalfWidth]
        [LookupEditor(typeof(LkpPhysExamGroupRow))]
        public Int32 GroupId { get; set; }
        [HalfWidth]
        [LookupEditor(typeof(LkpPhysExamsRow),CascadeField = "GroupId", CascadeFrom = "GroupId")]
        public Int32 PhysExamId { get; set; }
        public String Note { get; set; }

    }
}