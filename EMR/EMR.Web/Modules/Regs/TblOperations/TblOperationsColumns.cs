
namespace EMR.Regs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Regs.TblOperations")]
    [BasedOnRow(typeof(Entities.TblOperationsRow), CheckNames = true)]
    public class TblOperationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Evid { get; set; }
        [Width(200)]
        public String Wardname { get; set; }
        [Width(200)]
        public String WvidVarNameDari { get; set; }
        [Width(200)]
        public String DiseaseName { get; set; }
        [Width(300)]
        public String Remarks { get; set; }
        [Width(100)]
        public String UserName { get; set; }
        [Width(100)]
        public DateTime LastUpdated { get; set; }
        [Width(100),DisplayName("Tenant")]
        public Int32 TenantId { get; set; }
    }
}