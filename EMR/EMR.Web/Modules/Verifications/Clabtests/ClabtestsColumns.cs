
namespace EMR.Verifications.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Verifications.Clabtests")]
    [BasedOnRow(typeof(Entities.ClabtestsRow), CheckNames = true)]
    public class ClabtestsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [Width(70)]
        public Int64 VisitId { get; set; }
        [Width(140)]
        public DateTime DateOfVisit { get; set; }
        [Width(140)]
        public String SDateOfVisit { get; set; }
        [EditLink]
        [Width(150)]
        public string LabTestName { get; set; }
        [Width(120)]
        public String Result { get; set; }
        [Width(150)]
        public String NormalRange { get; set; }
        [Width(110)]
        public String Unit { get; set; }
        [DateTimeEditor]
        [DisplayFormat("dd/MM/yyyy HH:mm:ss")]
        [Width(140)]
        public DateTime LabDateTime { get; set; }
        [Width(140)]
        public String SlabDate { get; set; }
    }
}