
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.Stages")]
    [BasedOnRow(typeof(Entities.StagesRow), CheckNames = true)]
    public class StagesForm
    {
        public String Stagename { get; set; }
    }
}