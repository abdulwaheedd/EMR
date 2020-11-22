
namespace EMR.Register.Forms
{
    using EMR.Common;
    using EMR.Configs.Entities;
    using EMR.Locations.Entities;
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Register.Regvisits")]
    [BasedOnRow(typeof(Entities.RegvisitsRow), CheckNames = true)]
    public class RegvisitsForm
    {
        [Category("Identification")]
        [HalfWidth,ReadOnly(true)]
        public Int64 Mrid { get; set; }
        [HalfWidth, ReadOnly(true)]
        public String MRN { get; set; }
        [Category("Status")]
        [LookupEditor(typeof(TblOccupationRow))]
        [OneThirdWidth]
        public Int32 OccupationId { get; set; }
        [LookupEditor(typeof(TblMaritalStatusRow))]
        [OneThirdWidth]
        public Int32 MaritalStatusId { get; set; }
        [OneThirdWidth]
        [DefaultValue("+93")]
        [MaskedEditor(Mask = "+99-999999999")]
        public String PhoneNumber { get; set; }
        [Category("Current Address")]
        [OneThirdWidth]
        [LookupEditor(typeof(ProvincesRow))]
        public Int32 ProvinceId { get; set; }
        [OneThirdWidth]
        [LookupEditor(typeof(DistrictsRow), CascadeField = "ProvinceId", CascadeFrom = "ProvinceId")]
        public Int32 DistrictId { get; set; }
        [OneThirdWidth]
        public String Location { get; set; }
        [Category("Visit Date")]
        [HalfWidth]
        [LookupEditor(typeof(TypeofvisitRow))]
        public Int32 TypeofvisitId { get; set; }
        [HalfWidth]
        [IntegerEditor(AllowNegatives =false,MaxValue =100,MinValue =0)]
        public Int32 DurationOfStay { get; set; }
        [HalfWidth]
        public DateTime DateOfVisit { get; set; }
        [HalfWidth]
        [ShamsiDatePickerEditor]
        public String SDateOfVisit { get; set; }
        [OneThirdWidth]
        [ReadOnly(true)]
        [LookupEditor(typeof(CyclesRow))]
        public Int32 CycleId { get; set; }
    }
}