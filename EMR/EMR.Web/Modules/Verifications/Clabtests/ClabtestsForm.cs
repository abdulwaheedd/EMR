
namespace EMR.Verifications.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Verifications.Clabtests")]
    [BasedOnRow(typeof(Entities.ClabtestsRow), CheckNames = true)]
    public class ClabtestsForm
    {
        public Int64 Mrid { get; set; }
        public Int64 VisitId { get; set; }
        [DateTimeEditor]
        public DateTime DateOfVisit { get; set; }
        public String SDateOfVisit { get; set; }
        [LookupEditor(typeof(Configs.Entities.LkpLabTestRow))]
        public Int32 LabTestId { get; set; }
        public String Result { get; set; }
        public String NormalRange { get; set; }
        public String Unit { get; set; }
        [DateTimeEditor]
        public DateTime LabDateTime { get; set; }
        public String SlabDate { get; set; }
    }
}