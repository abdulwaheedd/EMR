
namespace EMR.OPD.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OPD.PhysicalExamination")]
    [BasedOnRow(typeof(Entities.PhysicalExaminationRow), CheckNames = true)]
    public class PhysicalExaminationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, SortOrder(1, descending: true)]
        public Int64 Id { get; set; }
        [Width(200)]
        [EditLink]
        public string PhysExamName { get; set; }
        [Width(200)]
        public string PhysExamGroup { get; set; }
        [Width(500)]
        public String Note { get; set; }

    }
}