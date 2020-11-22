
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.LkpRecommands")]
    [BasedOnRow(typeof(Entities.LkpRecommandsRow), CheckNames = true)]
    public class LkpRecommandsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,SortOrder(1,descending:true)]
        public Int32 RecomId { get; set; }
        [EditLink]
        [Width(400)]
        public String RecommandName { get; set; }
    }
}