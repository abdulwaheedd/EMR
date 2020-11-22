
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.Cycles")]
    [BasedOnRow(typeof(Entities.CyclesRow), CheckNames = true)]
    public class CyclesForm
    {
        public String Cyclename { get; set; }
        public String Cycledescription { get; set; }
    }
}