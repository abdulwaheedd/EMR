
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.LkpPhysExams")]
    [BasedOnRow(typeof(Entities.LkpPhysExamsRow), CheckNames = true)]
    public class LkpPhysExamsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,SortOrder(1,descending:true)]
        public Int32 PhysExamId { get; set; }
        [EditLink]
        [Width(600)]
        public String PhysExamName { get; set; }
        [Width(400)]
        public string GroupName { get; set; }
        public String GroupEamName { get; set; }
    }
}