
namespace EMR.Structure.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Structure.BedReportDetails")]
    [BasedOnRow(typeof(Entities.BedReportDetailsRow), CheckNames = true)]
    public class BedReportDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        [Width(250)]
        public String WardWardNameD { get; set; }
        [Width(150)]
        public Int32 BedActive { get; set; }
    }
}