
namespace EMR.Regs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Regs.TblNewBornManagement")]
    [BasedOnRow(typeof(Entities.TblNewBornManagementRow), CheckNames = true)]
    public class TblNewBornManagementColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 NbId { get; set; }
        [Width(120)]
        public Int64 AdMrid { get; set; }
        [Width(120)]
        public Int64 AdId { get; set; }
        [Width(150)]
        public String NewbornStatus { get; set; }
        [Width(150)]
        public String Newbornoutcome { get; set; }
        [Width(150)]
        public String Newbornweight { get; set; }
        [Width(150)]
        public String Newbornchild { get; set; }
        [Width(150)]
        public String Newborngender { get; set; }
        [Width(150)]
        public String UserName { get; set; }
        [Width(100)]
        public DateTime LastUpdated { get; set; }
        [Width(100)]
        public Int32 TenantId { get; set; }
    }
}