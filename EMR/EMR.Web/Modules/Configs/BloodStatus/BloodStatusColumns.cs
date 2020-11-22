
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.BloodStatus")]
    [BasedOnRow(typeof(Entities.BloodStatusRow), CheckNames = true)]
    public class BloodStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BId { get; set; }
        [EditLink]
        public String Bloodstatus { get; set; }
    }
}