
namespace EMR.Verifications.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;
    using EMR.Locations.Entities;

    [FormScript("Verifications.Cvisits")]
    [BasedOnRow(typeof(Entities.CvisitsRow), CheckNames = true)]
    public class CvisitsForm
    {
        [Category("Identification")]
        [HalfWidth, HideOnInsert, ReadOnly(true)]
        public Int64 Mrid { get; set; }
        [HideOnInsert, HalfWidth, ReadOnly(true)]
        public String MRN { get; set; }
        [Category("Status")]
        [LookupEditor(typeof(TblOccupationRow))]
        [OneThirdWidth]
        [ReadOnly(true)]
        public Int32 OccupationId { get; set; }
        [LookupEditor(typeof(TblMaritalStatusRow))]
        [OneThirdWidth]
        [ReadOnly(true)]
        public Int32 MaritalStatusId { get; set; }
        [OneThirdWidth]
        [ReadOnly(true)]
        public String PhoneNumber { get; set; }
        [Category("Address")]
        [OneThirdWidth]
        [ReadOnly(true)]
        [LookupEditor(typeof(ProvincesRow))]
        public Int32 ProvinceId { get; set; }
        [OneThirdWidth]
        [ReadOnly(true)]
        [LookupEditor(typeof(DistrictsRow), CascadeField = "ProvinceId", CascadeFrom = "ProvinceId")]
        public Int32 DistrictId { get; set; }
        [OneThirdWidth]
        [ReadOnly(true)]
        public String Location { get; set; }
        [Category("Visit Date")]
        [OneThirdWidth]
        [ReadOnly(true)]
        [LookupEditor(typeof(TypeofvisitRow))]
        public Int32 TypeofvisitId { get; set; }
        [OneThirdWidth]
        [ReadOnly(true)]
        public DateTime DateOfVisit { get; set; }
        public String SDateOfVisit { get; set; }
    }
}