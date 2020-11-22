
namespace EMR.LabTest.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Common;

    [FormScript("LabTest.LabTests")]
    [BasedOnRow(typeof(Entities.LabTestsRow), CheckNames = true)]
    public class LabTestsForm
    {
        public Int64 VisitId { get; set; }
        [ReadOnly(true)]
        [LookupEditor(typeof(Configs.Entities.LkpTestTypesRow))]
        public Int32 TestTypeId { get; set; }
        [ReadOnly(true)]
        [LookupEditor(typeof(Configs.Entities.LkpLabTestRow), CascadeField = "SubTypeTestId", CascadeFrom = "TestTypeId")]
        public Int32 LabTestId { get; set; }
        [ReadOnly(true)]
        public String NormalRange { get; set; }
        [ReadOnly(true)]
        public String Unit { get; set; }
        public String Result { get; set; }
        [DateTimeEditor]
        public DateTime LabDateTime { get; set; }
        [ShamsiDatePickerEditor]
        public string SlabDate { get; set; }
    }
}