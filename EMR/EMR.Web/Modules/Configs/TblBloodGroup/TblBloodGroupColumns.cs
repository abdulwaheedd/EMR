
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblBloodGroup")]
    [BasedOnRow(typeof(Entities.TblBloodGroupRow), CheckNames = true)]
    public class TblBloodGroupColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,SortOrder(1,descending:true)]
        public Int32 BloodGroupId { get; set; }
        public String BloodGroup { get; set; }
    }
}