
namespace EMR.Verifications.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Verifications.Cimagings")]
    [BasedOnRow(typeof(Entities.CimagingsRow), CheckNames = true)]
    public class CimagingsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [Width(80)]
        public Int64 VisitId { get; set; }
        [Width(140)]
        public DateTime DateOfVisit { get; set; }
        [Width(140)]
        public String SDateOfVisit { get; set; }
        [EditLink]
        [Width(150)]
        public String ImagingName { get; set; }
        [Width(400)]
        public String TestImage { get; set; }
        [HtmlContentEditor]
        [Width(300)]
        public String Note { get; set; }
    }
}