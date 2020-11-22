
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblDept")]
    [BasedOnRow(typeof(Entities.TblDeptRow), CheckNames = true)]
    public class TblDeptColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1, descending: true)]
        public Int32 DpId { get; set; }
        public String DeptName { get; set; }
        public String DeptNameD { get; set; }
    }
}