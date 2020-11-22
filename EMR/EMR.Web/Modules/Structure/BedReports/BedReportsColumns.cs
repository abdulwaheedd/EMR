
namespace EMR.Structure.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Structure.BedReports")]
    [BasedOnRow(typeof(Entities.BedReportsRow), CheckNames = true)]
    public class BedReportsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Width(100)]
        public Int32 ReportId { get; set; }
        [EditLink]
        [Width(400)]
        public String FacilityFacilityName { get; set; }
        [Width(100)]
        public Int32 Year { get; set; }
        [Width(100)]
        public Int32 Month { get; set; }
        [Width(400)]
        public String Comment { get; set; }
    }
}