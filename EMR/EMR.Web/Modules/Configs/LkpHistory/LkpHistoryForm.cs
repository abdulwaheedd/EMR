
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.LkpHistory")]
    [BasedOnRow(typeof(Entities.LkpHistoryRow), CheckNames = true)]
    public class LkpHistoryForm
    {
        public String HistoryName { get; set; }
    }
}