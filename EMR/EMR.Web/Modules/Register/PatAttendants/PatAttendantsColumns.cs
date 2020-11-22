
namespace EMR.Register.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Register.PatAttendants")]
    [BasedOnRow(typeof(Entities.PatAttendantsRow), CheckNames = true)]
    public class PatAttendantsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 AttendantId { get; set; }
        public Int64 VisitId { get; set; }
        [EditLink]
        public String AttendantName { get; set; }
        public String FatherName { get; set; }
        public String GenderName { get; set; }
        public String RelationName { get; set; }
        public String Phone { get; set; }
        public String Address { get; set; }
    }
}