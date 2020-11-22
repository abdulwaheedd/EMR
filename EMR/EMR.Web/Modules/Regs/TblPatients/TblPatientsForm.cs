
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

    [FormScript("Regs.TblPatients")]
    [BasedOnRow(typeof(Entities.TblPatientsRow), CheckNames = false)]
    public class TblPatientsForm
    {
        [LookupEditor(typeof(FacilityInfoRow))]

        public Int32 FacilityId { get; set; }
        public string MRN { get; set; }
        public String PatName { get; set; }
        public String PatFatName { get; set; }
        public String PatHusbandName { get; set; }
        public String PatRealationName { get; set; }
        [LookupEditor(typeof(TblGenderRow))]
        public Int16 PatGender { get; set; }
        [LookupEditor(typeof(TblBloodGroupRow))]
        public Int32 PatBlooldGroup { get; set; }
        public String PatTazkera { get; set; }

    }
}