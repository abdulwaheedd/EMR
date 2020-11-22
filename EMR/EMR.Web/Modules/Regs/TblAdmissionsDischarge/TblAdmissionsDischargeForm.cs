
namespace EMR.Regs.Forms
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

    [FormScript("Regs.TblAdmissionsDischarge")]
    [BasedOnRow(typeof(Entities.TblAdmissionsDischargeRow), CheckNames = true)]
    public class TblAdmissionsDischargeForm
    {
        [HideOnInsert]
        public Int64 Mrid { get; set; }
        [HideOnInsert, ReadOnly(true)]
        public string MRN { get; set; }
        [LookupEditor(typeof(TblWardRow))]
        public Int32 Wardid { get; set; }
        [LookupEditor(typeof(TblWardDiseasesRow),CascadeField = "WardCode", CascadeFrom = "Wardid")]
        public Int32 AdDiagnosis { get; set; }
        [ShamsiDatePickerEditor]
        public String AdDateH { get; set; }
        public DateTime AdDate { get; set; }
        public Int32 AdAge { get; set; }
        [LookupEditor(typeof(TblAgeTypesRow))]
        public Int32 AdAgeType { get; set; }
        [LookupEditor(typeof(TblCaseTypesRow))]
        public Int32 AdCaseType { get; set; }
        [DisplayName("Patient status"),LookupEditor(typeof(TblOutcomesMotherRow))]
        public Int32 DisStatus { get; set; }
        [LookupEditor(typeof(TblWardDiseasesRow), CascadeField = "WardCode", CascadeFrom = "Wardid")]
        public Int32 DisDiagResult { get; set; }
        [LookupEditor(typeof(TblWardDiseasesRow)),Hidden]
        public Int32 DisDiagCausDeath { get; set; }
        [ShamsiDatePickerEditor]
        public String DisDateH { get; set; }
        
        public DateTime DisDate { get; set; }
        [LookupEditor(typeof(TblAbortionTypeRow))]
        [Visible(false)]
        public Int32 AbortionType { get; set; }
    }
}