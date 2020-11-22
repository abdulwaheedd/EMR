
namespace EMR.Verifications.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Verifications.Cmedprescriptions")]
    [BasedOnRow(typeof(Entities.CmedprescriptionsRow), CheckNames = true)]
    public class CmedprescriptionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 OrderId { get; set; }
        [Width(80)]
        [EditLink]
        public Int64 VisitId { get; set; }
        [Width(140)]
        public DateTime DateOfVisit { get; set; }
        [Width(140)]
        public String SDateOfVisit { get; set; }
        [Width(300)]
        [EditLink]
        public string MedicineName { get; set; }
        [Width(110)]
        public Int32 Quantity { get; set; }
        [Width(110)]
        public String DailyDose { get; set; }
        [Width(260)]
        public String Comment { get; set; }
    }
}