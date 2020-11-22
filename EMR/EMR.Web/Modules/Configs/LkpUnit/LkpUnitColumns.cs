
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.LkpUnit")]
    [BasedOnRow(typeof(Entities.LkpUnitRow), CheckNames = true)]
    public class LkpUnitColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UnitId { get; set; }
        [EditLink]
        public String UnitName { get; set; }
    }
}