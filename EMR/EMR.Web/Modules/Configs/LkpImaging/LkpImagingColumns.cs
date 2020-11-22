
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.LkpImaging")]
    [BasedOnRow(typeof(Entities.LkpImagingRow), CheckNames = true)]
    public class LkpImagingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,SortOrder(1,descending:true)]
        public Int32 ImagingId { get; set; }
        [EditLink,Width(200)]
        public String ImagingName { get; set; }
        [Width(500)]
        public String Note { get; set; }
    }
}