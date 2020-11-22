
namespace EMR.OPD.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OPD.VitalSigns")]
    [BasedOnRow(typeof(Entities.VitalSignsRow), CheckNames = true)]
    public class VitalSignsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, SortOrder(1, descending: true)]
        public Int32 VitalId { get; set; }
        [EditLink]
        [Width(80)]
        public Int64 VisitId { get; set; }
        [Width(100)]
        public int Weight { get; set; }
        [Width(100)]
        public int Height { get; set; }
        [Width(100)]
        public int Pulse { get; set; }
        [Width(120)]
        public Double Rr { get; set; }
        [Width(120)]
        public int Temp { get; set; }
        [Width(130)]
        public String Bp { get; set; }
        [Width(110)]
        public int Hr { get; set; }
        [Width(100)]
        public int O2 { get; set; }
        [Width(100)]
        [DisplayFormat("dd/MM/yyyy HH:mm:ss")]
        public DateTime VitalDateTime { get; set; }
        [Width(100)]
        public String SVitalDate { get; set; }
    }
}