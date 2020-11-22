
namespace EMR.Regs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Locations.Entities;
    using EMR.Configs.Entities;
    using EMR.Modules.Regs;
    using EMR.Common;

    [FormScript("Regs.TblReferral")]
    [BasedOnRow(typeof(Entities.TblReferralRow), CheckNames = true)]
    public class TblReferralForm
    {
        public Int64 AdId { get; set; }
        [LookupEditor(typeof(FacilityInfoReferRow))]
        public Int32 FacilityId { get; set; }
        [LookupEditor(typeof(TblWardRow))]
        public Int32 WardId { get; set; }
        [LookupEditor(typeof(TblWardDiseasesRow),CascadeField ="WardCode",CascadeFrom ="WardId")]
        public String RefDiagnosis { get; set; }
        public DateTime RefDate { get; set; }
        [ShamsiDatePickerEditor]
        public String RefDateH { get; set; }
        [LookupEditor(typeof(ReferTypeLookup))]
        public Int32 RefType { get; set; }
    }
}