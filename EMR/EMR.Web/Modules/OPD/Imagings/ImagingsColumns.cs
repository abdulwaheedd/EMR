
namespace EMR.OPD.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OPD.Imagings")]
    [BasedOnRow(typeof(Entities.ImagingsRow), CheckNames = true)]
    public class ImagingsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,SortOrder(1,descending:true)]
        public Int64 Id { get; set; }
        [DisplayFormat("VisitID")]
        public Int64 VisitId { get; set; }
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