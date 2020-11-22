
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.Cycles")]
    [BasedOnRow(typeof(Entities.CyclesRow), CheckNames = true)]
    public class CyclesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CycleId { get; set; }
        [EditLink]
        public String Cyclename { get; set; }
        public String Cycledescription { get; set; }
    }
}