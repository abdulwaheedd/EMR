
namespace EMR.VitalSigns.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("VitalSigns.Cyclevisits")]
    [BasedOnRow(typeof(Entities.CyclevisitsRow), CheckNames = true)]
    public class CyclevisitsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 SessionId { get; set; }
        [Width(200)]
        [EditLink]
        [DateTimeFormatter]
        public String SchedulePlanDate { get; set; }
        [Width(200)]
        public String ScheduleSPlanDate { get; set; }
        [Width(200)]
        public DateTime ActualDate { get; set; }
        [Width(200)]
        public String SActualDate { get; set; }
        //[Width(200)]
        //public DateTime Visittime { get; set; }
        [Width(200)]
        public String Caretype { get; set; }
    }
}