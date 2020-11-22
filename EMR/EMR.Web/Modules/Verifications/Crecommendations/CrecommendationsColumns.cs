
namespace EMR.Verifications.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Verifications.Crecommendations")]
    [BasedOnRow(typeof(Entities.CrecommendationsRow), CheckNames = true)]
    public class CrecommendationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 RecommandationId { get; set; }
        [Width(80)]
        public Int64 VisitId { get; set; }
        [Width(140)]
        public DateTime DateOfVisit { get; set; }
        [Width(140)]
        public String SDateOfVisit { get; set; }

        [EditLink]
        [Width(200)]
        public String RecomRecommandName { get; set; }
        [Width(500)]
        public String Note { get; set; }

    }
}