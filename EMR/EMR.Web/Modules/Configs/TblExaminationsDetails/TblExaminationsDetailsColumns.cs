
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblExaminationsDetails")]
    [BasedOnRow(typeof(Entities.TblExaminationsDetailsRow), CheckNames = true)]
    public class TblExaminationsDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1,descending:true)]
        public Int32 Edid { get; set; }
        [Width(100)]
        public Int32 DpId { get; set; }
        [Width(250)]
        public string DepartmentName { get; set; }
        [Width(250)]
        public String EdName { get; set; }
    }
}