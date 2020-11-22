
namespace EMR.Medadmins.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Medadmins.MPrescriptions")]
    [BasedOnRow(typeof(Entities.MPrescriptionsRow), CheckNames = true)]
    public class MPrescriptionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, SortOrder(1, descending: true)]
        public Int64 OrderId { get; set; }
        public Int64 VisitId { get; set; }
        [Width(300)]
        [EditLink]
        public string MedicineName { get; set; }
        [Width(150)]
        public Int32 Quantity { get; set; }
        [Width(150)]
        public String DailyDose { get; set; }
        [Width(300)]
        public String Comment { get; set; }
    }
}