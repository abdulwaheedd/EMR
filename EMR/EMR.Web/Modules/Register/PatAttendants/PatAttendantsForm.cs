
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

    [FormScript("Register.PatAttendants")]
    [BasedOnRow(typeof(Entities.PatAttendantsRow), CheckNames = true)]
    public class PatAttendantsForm
    {
        public Int64 VisitId { get; set; }
        public String AttendantName { get; set; }
        public String FatherName { get; set; }
        [LookupEditor(typeof(TblGenderRow))]
        public Int32 GenderId { get; set; }
        [DefaultValue("+93")]
        [MaskedEditor(Mask = "+99-999999999")]
        public String Phone { get; set; }
        [LookupEditor(typeof(TblRelationRow))]
        public Int32 RelationType { get; set; }
        public String Address { get; set; }
    }
}