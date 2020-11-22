
namespace EMR.Regs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Regs.TblTestExaminations")]
    [BasedOnRow(typeof(Entities.TblTestExaminationsRow), CheckNames = true)]
    public class TblTestExaminationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PatTestId { get; set; }
        public Int64 AdId { get; set; }
        [Width(100)]
        public Int64 AdMrid { get; set; }
        [Width(200)]
        public String DeptName { get; set; }
        [Width(200)]
        public String TestName { get; set; }
        [Width(100)]
        public String Diagnosisname { get; set; }

        [Width(100)]
        public String UserName { get; set; }
        [Width(100)]
        public String LastUpdated { get; set; }
        [Width(100)]
        public Int32 TenantId { get; set; }
    }
}