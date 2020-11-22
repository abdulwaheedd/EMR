
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TopographyMain")]
    [BasedOnRow(typeof(Entities.TopographyMainRow), CheckNames = true)]
    public class TopographyMainColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TopomainId { get; set; }
        [EditLink]
        public String TopographyMName { get; set; }
        public String Icd0Code { get; set; }
    }
}