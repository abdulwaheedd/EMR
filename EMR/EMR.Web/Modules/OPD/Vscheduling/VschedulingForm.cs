
namespace EMR.OPD.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;
    using EMR.Common;

    [FormScript("OPD.Vscheduling")]
    [BasedOnRow(typeof(Entities.VschedulingRow), CheckNames = true)]
    public class VschedulingForm
    {
        public Int64 VisitId { get; set; }
        [LookupEditor(typeof(CyclesRow))]
        public Int32 CycleId { get; set; }
        [HalfWidth]

        public DateTime PlanDate { get; set; }
        [HalfWidth]
        [ShamsiDatePickerEditor]
        public String SPlanDate { get; set; }
        [HtmlNoteContentEditor]
        public String Comment { get; set; }
    }
}