
namespace EMR.Regs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Regs.TblDischarge")]
    [BasedOnRow(typeof(Entities.TblDischargeRow), CheckNames = true)]
    public class TblDischargeForm
    {
        [HideOnInsert]
        public Int32 Mrid { get; set; }
        [HideOnInsert, ReadOnly(true)]
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