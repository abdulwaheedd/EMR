
namespace EMR.Register.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;
    using EMR.Imaging;
    using EMR.Register.Entities;
    using EMR.Common;
    using EMR.Locations.Entities;

    [FormScript("Register.Regoutpatients")]
    [BasedOnRow(typeof(Entities.RegoutpatientsRow), CheckNames = true)]
    public class RegoutpatientsForm
    {
        [Category("Medical Record #")]
        public String Mrn { get; set; }
        [Category("Basic Info")]
        [HalfWidth]
        public String FirstName { get; set; }
        [HalfWidth]
        public String LastName { get; set; }
        [HalfWidth]
        public String FatherName { get; set; }
        [LookupEditor(typeof(TblGenderRow))]
        [HalfWidth]
        public Int32 GenderId { get; set; }
        //[HalfWidth]
        //[LookupEditor(typeof(EthnicityRow))]
        //public Int32 EthnicityId { get; set; }
        [HalfWidth]
        public String GrandFather { get; set; }
        [OneThirdWidth]
        public DateTime DateOfBirth { get; set; }
        [OneThirdWidth]
        [ShamsiDatePickerEditor]
        public String SDateOfBirth { get; set; }
        [OneThirdWidth]
        public Int32 AgeInYear { get; set; }
        [Category("Place Of Birth")]
        [OneThirdWidth]
        [LookupEditor(typeof(ProvincesRow))]
        public Int32 ProvinceId { get; set; }
        [OneThirdWidth]
        [LookupEditor(typeof(DistrictsRow), CascadeField = "ProvinceId", CascadeFrom = "ProvinceId")]
        public Int32 DistrictId { get; set; }
        [OneThirdWidth]
        public String Location { get; set; }
        [Category("Refer to Doctor")]
        [HalfWidth]
        [LookupEditor(typeof(NameslistRow))]
        public Int32 RefertoDoctor { get; set; }
    }
}