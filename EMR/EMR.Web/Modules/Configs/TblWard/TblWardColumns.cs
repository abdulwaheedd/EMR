
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblWard")]
    [BasedOnRow(typeof(Entities.TblWardRow), CheckNames = true)]
    public class TblWardColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1,descending:true)]
        public Int32 WardId { get; set; }
        public String WardName { get; set; }
        public String WardNameD { get; set; }
        public string Ward { get; set; }
    }
}