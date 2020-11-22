
namespace EMR.OPD.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OPD.LabTest")]
    [BasedOnRow(typeof(Entities.LabTestRow), CheckNames = true)]
    public class LabTestForm
    {
        public Int64 VisitId { get; set; }
        [LookupEditor(typeof(Configs.Entities.LkpTestTypesRow))]
        public Int32 TestTypeId { get; set; }
        [LookupEditor(typeof(Configs.Entities.LkpLabTestRow), CascadeField = "SubTypeTestId", CascadeFrom = "TestTypeId")]
        public Int32 LabTestId { get; set; }
        [ReadOnly(true)]
        public String NormalRange { get; set; }
        [ReadOnly(true)]
        public String Unit { get; set; }
        [ReadOnly(true)]
        public String Result { get; set; }
        [ReadOnly(true)]
        public DateTime LabDateTime { get; set; }
        [ReadOnly(true)]
        public string SlabDate { get; set; }
    }
}