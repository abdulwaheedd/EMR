
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.LkpTestTypes")]
    [BasedOnRow(typeof(Entities.LkpTestTypesRow), CheckNames = true)]
    public class LkpTestTypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TestTypeId { get; set; }
        [EditLink]
        public String TestTypeName { get; set; }
    }
}