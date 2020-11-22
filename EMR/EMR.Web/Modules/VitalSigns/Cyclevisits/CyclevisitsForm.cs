
namespace EMR.VitalSigns.Forms
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

    [FormScript("VitalSigns.Cyclevisits")]
    [BasedOnRow(typeof(Entities.CyclevisitsRow), CheckNames = true)]
    public class CyclevisitsForm
    {
        public Int64 ScheduleId { get; set; }
        [HalfWidth]
        public DateTime ActualDate { get; set; }
        [HalfWidth]
        [ShamsiDatePickerEditor]
        public String SActualDate { get; set; }
        //[TimeEditor]
        //public DateTime Visittime { get; set; }
        [LookupEditor(typeof(CaretypesRow))]
        public Int32 CareTypeId { get; set; }
    }
}