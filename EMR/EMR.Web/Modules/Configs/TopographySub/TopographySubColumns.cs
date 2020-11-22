
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TopographySub")]
    [BasedOnRow(typeof(Entities.TopographySubRow), CheckNames = true)]
    public class TopographySubColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ToposubId { get; set; }
        public Int32 Icd0Code { get; set; }
        [EditLink]
        public String TopographySName { get; set; }
        public String TopomainTopographyMName { get; set; }
    }
}