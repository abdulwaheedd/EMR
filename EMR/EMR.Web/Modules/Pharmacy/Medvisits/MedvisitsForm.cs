
namespace EMR.Pharmacy.Forms
{
    using EMR.Configs.Entities;
    using EMR.Locations.Entities;
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Pharmacy.Medvisits")]
    [BasedOnRow(typeof(Entities.MedvisitsRow), CheckNames = true)]
    public class MedvisitsForm
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
        [OneThirdWidth]
        [ReadOnly(true)]
        [LookupEditor(typeof(CyclesRow))]
        public Int32 CycleId { get; set; }
    }
}