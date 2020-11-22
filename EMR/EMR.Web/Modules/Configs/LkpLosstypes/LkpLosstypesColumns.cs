
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.LkpLosstypes")]
    [BasedOnRow(typeof(Entities.LkpLosstypesRow), CheckNames = true)]
    public class LkpLosstypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 LosstypeId { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}