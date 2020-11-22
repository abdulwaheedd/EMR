
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblDiagnosis")]
    [BasedOnRow(typeof(Entities.TblDiagnosisRow), CheckNames = true)]
    public class TblDiagnosisColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1, descending: true)]
        public Int32 DiagnosisId { get; set; }
        [EditLink]
        public String DiagnosisDari { get; set; }
        public String DiagnosisPashto { get; set; }
        public String DiagnosisEn { get; set; }

    }
}