
namespace EMR.OPD.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OPD.Vscheduling")]
    [BasedOnRow(typeof(Entities.VschedulingRow), CheckNames = true)]
    public class VschedulingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ScheduleId { get; set; }
        [Width(200)]
        [EditLink]
        public string CycleCyclename { get; set; }
        [Width(200)]
        public DateTime PlanDate { get; set; }
        [Width(200)]
        public String SPlanDate { get; set; }
        [Width(440)]
        public String Comment { get; set; }
    }
}