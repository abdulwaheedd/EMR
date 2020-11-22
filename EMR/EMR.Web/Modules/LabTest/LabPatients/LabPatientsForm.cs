
namespace EMR.LabTest.Forms
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

    [FormScript("LabTest.LabPatients")]
    [BasedOnRow(typeof(Entities.LabPatientsRow), CheckNames = true)]
    public class LabPatientsForm
    {
        [Category("Medical Record #")]
        [ReadOnly(true)]
        public String Mrn { get; set; }
        [Category("Basic Info")]
        [ReadOnly(true)]
        [HalfWidth]
        public String FirstName { get; set; }
        [ReadOnly(true)]
        [HalfWidth]
        public String LastName { get; set; }
        [ReadOnly(true)]
        [HalfWidth]
        public String FatherName { get; set; }
        [ReadOnly(true)]
        [LookupEditor(typeof(TblGenderRow))]
        [HalfWidth]
        public Int32 GenderId { get; set; }
        [ReadOnly(true)]
        [HalfWidth]
        public DateTime DateOfBirth { get; set; }
        [ReadOnly(true)]
        [HalfWidth]
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