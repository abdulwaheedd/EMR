
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.LkpPhysExamGroup")]
    [BasedOnRow(typeof(Entities.LkpPhysExamGroupRow), CheckNames = true)]
    public class LkpPhysExamGroupForm
    {
        public String GroupName { get; set; }
    }
}