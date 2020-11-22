
namespace EMR.Regs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Regs.TblAdmissionsDischarge")]
    [BasedOnRow(typeof(Entities.TblAdmissionsDischargeRow), CheckNames = true)]
    public class TblAdmissionsDischargeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 AdId { get; set; }
        [Width(120)]
        public String MRN { get; set; }
        [Width(150)]
        public String MridPatName { get; set; }
        [Width(150)]
        public String WardidWardName { get; set; }
        [Width(120)]
        public Int32 AdDiagnosis { get; set; }
        public DateTime AdDate { get; set; }
        public String AdDateH { get; set; }
        public Int32 AdAge { get; set; }
        [Width(150)]
        public String AdCaseTypeName { get; set; }
        public Int32 DisStatus { get; set; }
        [DisplayName("Final result"),Width(140)]
        public Int32 DisDiagResult { get; set; }
        [DisplayName("Result date(s)"),Width(140)]
        public String DisDateH { get; set; }
        [DisplayName("Result date(m)"), Width(140)]
        public DateTime DisDate { get; set; }
        [DisplayName("Death reason"), Width(140)]
        public Int32 DisDiagCausDeath { get; set; }
        [Width(140)]
        public String AbortionTypeName { get; set; }
    }
}