
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblChild")]
    [BasedOnRow(typeof(Entities.TblChildRow), CheckNames = true)]
    public class TblChildColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1, descending: true)]
        public Int32 ChildId { get; set; }
        public String ChildDari { get; set; }
        public String ChildPashto { get; set; }
        public String ChildEn { get; set; }
        [Width(200)]
        public String NbChild { get; set; }
    }
}