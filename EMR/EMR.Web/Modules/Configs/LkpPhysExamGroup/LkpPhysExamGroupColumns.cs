
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.LkpPhysExamGroup")]
    [BasedOnRow(typeof(Entities.LkpPhysExamGroupRow), CheckNames = true)]
    public class LkpPhysExamGroupColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 GroupId { get; set; }
        [EditLink]
        public String GroupName { get; set; }
    }
}