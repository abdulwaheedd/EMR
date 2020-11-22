
namespace EMR.FM.Forms
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

    [FormScript("FM.UserFeePatients")]
    [BasedOnRow(typeof(Entities.UserFeePatientsRow), CheckNames = true)]
    public class UserFeePatientsForm
    {
        [LookupEditor(typeof(FacilityInfoRow))]
        [HalfWidth]
        public Int32 FacilityId { get; set; }
        [HalfWidth]
        [ReadOnly(true)]
        public String Mrn { get; set; }
        [HalfWidth]
        public String PatName { get; set; }
        [HalfWidth]
        public String PatFatName { get; set; }
        [LookupEditor(typeof(TblGenderRow))]
        [HalfWidth]
        public Int16 PatGender { get; set; }
        [HalfWidth]
        public String PatRealationName { get; set; }
    }
}