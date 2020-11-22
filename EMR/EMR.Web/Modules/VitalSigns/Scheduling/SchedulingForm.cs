
namespace EMR.VitalSigns.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Common;

    [FormScript("VitalSigns.Scheduling")]
    [BasedOnRow(typeof(Entities.SchedulingRow), CheckNames = true)]
    public class SchedulingForm
    {
        [ReadOnly(true)]
        public Int64 VisitId { get; set; }
        [ReadOnly(true)]
        public Int32 CycleId { get; set; }
        [HalfWidth]
        [ReadOnly(true)]
        public DateTime PlanDate { get; set; }
        [HalfWidth]
        [ShamsiDatePickerEditor]
        [ReadOnly(true)]
        public String SPlanDate { get; set; }
        [HtmlContentEditor]
        public String Comment { get; set; }
    }
}