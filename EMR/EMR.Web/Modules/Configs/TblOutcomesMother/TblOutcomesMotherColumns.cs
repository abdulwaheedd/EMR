
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblOutcomesMother")]
    [BasedOnRow(typeof(Entities.TblOutcomesMotherRow), CheckNames = true)]
    public class TblOutcomesMotherColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OutcomeId { get; set; }
        [EditLink]
        public String OutcomeEng { get; set; }
        public String OutcomeDari { get; set; }
        public String OutcomeName { get; set; }
    }
}