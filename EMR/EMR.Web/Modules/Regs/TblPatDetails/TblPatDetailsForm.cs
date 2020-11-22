
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
    using EMR.Common;

    [FormScript("Regs.TblPatDetails")]
    [BasedOnRow(typeof(Entities.TblPatDetailsRow), CheckNames = true)]
    public class TblPatDetailsForm
    {
        [HideOnInsert,ReadOnly(true)]
        public Int64 Mrid { get; set; }
        [HideOnInsert,ReadOnly(true)]
        public String MRN { get; set; }
        [LookupEditor(typeof(ProvincesRow)),FullWidth]
        public Int32? ProvinceId { get; set; }
        [LookupEditor(typeof(DistrictsRow),CascadeField ="ProvinceId",CascadeFrom ="ProvinceId"),FullWidth]
        public Int32? DistrictId { get; set; }
        [FullWidth]
        public String PatLocation { get; set; }
        [LookupEditor(typeof(TblMaritalStatusRow)), ReadOnly(false), FullWidth]
        public Int32 MariId { get; set; }
        public String PatPhone { get; set; }
        [LookupEditor(typeof(TblEducationRow))]
        public Int32 Eid { get; set; }
        [LookupEditor(typeof(TblOccupationRow))]
        public Int32 Oid { get; set; }
        [ShamsiDatePickerEditor]
        public String PatDdateH { get; set; }
        public DateTime PatDdate { get; set; }

        //public String UserName { get; set; }
        //public DateTime LastUpdated { get; set; }
        //public Int32 TenantId { get; set; }
    }
}