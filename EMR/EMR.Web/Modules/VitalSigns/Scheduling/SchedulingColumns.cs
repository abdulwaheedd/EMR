
namespace EMR.VitalSigns.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VitalSigns.Scheduling")]
    [BasedOnRow(typeof(Entities.SchedulingRow), CheckNames = true)]
    public class SchedulingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ScheduleId { get; set; }
        [Width(200)]
        [EditLink]
        public String CycleCyclename { get; set; }
        [Width(200)]
        public DateTime PlanDate { get; set; }
        [Width(200)]
        public String SPlanDate { get; set; }
        [Width(200)]
        public String Comment { get; set; }
    }
}