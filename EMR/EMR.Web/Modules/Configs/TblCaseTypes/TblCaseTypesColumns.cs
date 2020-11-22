
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblCaseTypes")]
    [BasedOnRow(typeof(Entities.TblCaseTypesRow), CheckNames = true)]
    public class TblCaseTypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1, descending: true)]
        public Int32 CaseId { get; set; }
        [EditLink]
        public String CasetypeEn { get; set; }
        public String CasetypeDari { get; set; }
        public String CasetypePashto { get; set; }
        public String CaseTypeName { get; set; }
    }
}