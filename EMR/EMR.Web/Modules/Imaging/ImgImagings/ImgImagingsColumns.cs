
namespace EMR.Imaging.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Imaging.ImgImagings")]
    [BasedOnRow(typeof(Entities.ImgImagingsRow), CheckNames = true)]
    public class ImgImagingsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, SortOrder(1, descending: true)]
        public Int32 Id { get; set; }
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