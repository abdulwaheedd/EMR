
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblEducation")]
    [BasedOnRow(typeof(Entities.TblEducationRow), CheckNames = true)]
    public class TblEducationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1, descending: true)]
        public Int32 Eid { get; set; }
        public String EducationEng { get; set; }
        public String EducationDari { get; set; }
        public String EducationName { get; set; }
    }
}