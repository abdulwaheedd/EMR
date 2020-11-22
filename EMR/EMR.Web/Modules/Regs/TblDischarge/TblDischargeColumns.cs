
namespace EMR.Regs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Regs.TblDischarge")]
    [BasedOnRow(typeof(Entities.TblDischargeRow), CheckNames = true)]
    public class TblDischargeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DisId { get; set; }
        public String MRN { get; set; }
        public Int32 Wardid { get; set; }
        public String DisDiagnosis { get; set; }
        public DateTime DisDate { get; set; }
        public String DisDateH { get; set; }
        public String DisStatus { get; set; }
        public String UserName { get; set; }
        public DateTime LastUpdated { get; set; }
        public Int32 TenantId { get; set; }
        public Int32 DisDiagResult { get; set; }
    }
}