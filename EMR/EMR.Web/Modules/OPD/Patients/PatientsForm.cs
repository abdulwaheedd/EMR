
namespace EMR.OPD.Forms
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

    [FormScript("OPD.Patients")]
    [BasedOnRow(typeof(Entities.PatientsRow), CheckNames = true)]
    public class PatientsForm
    {
        [Category("Medical Record #")]
        [ReadOnly(true)]
        public String Mrn { get; set; }
        [Category("Basic Info")]
        [HalfWidth]
        [ReadOnly(true)]
        public String FirstName { get; set; }
        [HalfWidth]
        [ReadOnly(true)]
        public String LastName { get; set; }
        [HalfWidth]
        [ReadOnly(true)]
        public String FatherName { get; set; }
        [LookupEditor(typeof(TblGenderRow))]
        [HalfWidth]
        [ReadOnly(true)]
        public Int32 GenderId { get; set; }
        [HalfWidth]
        [ReadOnly(true)]
        public DateTime DateOfBirth { get; set; }
        [HalfWidth]
        [ReadOnly(true)]
        public Int32 AgeInYear { get; set; }

        [HalfWidth]
        [ReadOnly(true)]
        [LookupEditor(typeof(EthnicityRow))]
        public Int32 EthnicityId { get; set; }

        [HalfWidth]
        [ReadOnly(true)]
        [LookupEditor(typeof(NameslistRow))]
        public Int32 RefertoDoctor { get; set; }
    }
}