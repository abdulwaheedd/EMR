
namespace EMR.Structure.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Structure.TblDuty")]
    [BasedOnRow(typeof(Entities.TblDutyRow), CheckNames = true)]
    public class TblDutyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DutId { get; set; }
        [EditLink]
        public String EmpId { get; set; }
        public Int32 WardId { get; set; }
        public Int32 DutYear { get; set; }
        public Int32 DutMonth { get; set; }
        public String UserName { get; set; }
        public DateTime LastUpdated { get; set; }
        public Int32 TenantId { get; set; }
    }
}