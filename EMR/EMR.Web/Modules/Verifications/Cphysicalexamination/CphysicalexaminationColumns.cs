
namespace EMR.Verifications.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Verifications.Cphysicalexamination")]
    [BasedOnRow(typeof(Entities.CphysicalexaminationRow), CheckNames = true)]
    public class CphysicalexaminationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [Width(70)]
        public Int64 VisitId { get; set; }
        [Width(140)]
        public DateTime DateOfVisit { get; set; }
        [Width(140)]
        [EditLink]
        public String SDateOfVisit { get; set; }
        [Width(200)]
        [EditLink]
        public string PhysExamName { get; set; }
        [Width(200)]
        public string PhysExamGroup { get; set; }
        [Width(400)]
        [HtmlNoteContentEditor]
        public String Note { get; set; }
    }
}