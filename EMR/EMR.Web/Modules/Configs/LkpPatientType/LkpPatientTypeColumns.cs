
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.LkpPatientType")]
    [BasedOnRow(typeof(Entities.LkpPatientTypeRow), CheckNames = true)]
    public class LkpPatientTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TypeId { get; set; }
        [EditLink]
        public String TypeNameEn { get; set; }
        public String TypeNameDari { get; set; }
        public String TypeNamePashto { get; set; }
    }
}