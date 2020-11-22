
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblOutcomesMother")]
    [BasedOnRow(typeof(Entities.TblOutcomesMotherRow), CheckNames = true)]
    public class TblOutcomesMotherForm
    {
        public String OutcomeEng { get; set; }
        public String OutcomeDari { get; set; }
    }
}