
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

    [FormScript("Configs.LkpLabTest")]
    [BasedOnRow(typeof(Entities.LkpLabTestRow), CheckNames = true)]
    public class LkpLabTestForm
    {
        public String LabTestName { get; set; }
        [LookupEditor(typeof(LkpTestTypesRow))]
        public Int32 SubTypeTestId { get; set; }
        public String NormalRange { get; set; }
        public Double TestPrice { get; set; }
        public String Unit { get; set; }
    }
}