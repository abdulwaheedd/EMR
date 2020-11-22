
namespace EMR.OPD.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OPD.Recommedations")]
    [BasedOnRow(typeof(Entities.RecommedationsRow), CheckNames = true)]
    public class RecommedationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 RecommandationId { get; set; }
        [EditLink]
        [Width(200)]
        public String RecomRecommandName { get; set; }
        [Width(600)]
        public String Note { get; set; }
    }
}