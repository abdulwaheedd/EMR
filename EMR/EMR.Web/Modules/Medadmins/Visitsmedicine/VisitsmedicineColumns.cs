
namespace EMR.Medadmins.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Medadmins.Visitsmedicine")]
    [BasedOnRow(typeof(Entities.VisitsmedicineRow), CheckNames = true)]
    public class VisitsmedicineColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 OrderId { get; set; }
        public Int64 VisitId { get; set; }
        public Int64 Mrid { get; set; }
        [EditLink]
        public String Medicine { get; set; }
    }
}