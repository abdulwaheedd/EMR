
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.Stages")]
    [BasedOnRow(typeof(Entities.StagesRow), CheckNames = true)]
    public class StagesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 StageId { get; set; }
        [EditLink]
        public String Stagename { get; set; }
    }
}