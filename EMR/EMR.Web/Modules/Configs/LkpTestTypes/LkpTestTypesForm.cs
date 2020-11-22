
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.LkpTestTypes")]
    [BasedOnRow(typeof(Entities.LkpTestTypesRow), CheckNames = true)]
    public class LkpTestTypesForm
    {
        public String TestTypeName { get; set; }
    }
}