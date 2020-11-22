
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;

    [FormScript("Configs.LkpPhysExams")]
    [BasedOnRow(typeof(Entities.LkpPhysExamsRow), CheckNames = true)]
    public class LkpPhysExamsForm
    {
        [LookupEditor(typeof(LkpPhysExamGroupRow),InplaceAdd =true)]
        public int GroupId { get; set; }
        public String PhysExamName { get; set; }
    }
}