
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblCaseTypes")]
    [BasedOnRow(typeof(Entities.TblCaseTypesRow), CheckNames = true)]
    public class TblCaseTypesForm
    {
        public String CasetypeEn { get; set; }
        public String CasetypeDari { get; set; }
        public String CasetypePashto { get; set; }
    }
}