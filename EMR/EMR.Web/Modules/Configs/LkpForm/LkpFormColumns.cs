
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.LkpForm")]
    [BasedOnRow(typeof(Entities.LkpFormRow), CheckNames = true)]
    public class LkpFormColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 FormId { get; set; }
        [EditLink]
        public String FormName { get; set; }
    }
}