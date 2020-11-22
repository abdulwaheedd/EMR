
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblRelation")]
    [BasedOnRow(typeof(Entities.TblRelationRow), CheckNames = true)]
    public class TblRelationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1,descending:true)]
        public Int32 RelationId { get; set; }
        [Width(200)]
        public String RelationNameEng { get; set; }
        [Width(200)]
        public String RelationName { get; set; }
        [Width(200)]
        public String Relation { get; set; }

    }
}