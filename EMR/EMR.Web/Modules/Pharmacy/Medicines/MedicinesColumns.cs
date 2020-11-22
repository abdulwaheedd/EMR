
namespace EMR.Pharmacy.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Pharmacy.Medicines")]
    [BasedOnRow(typeof(Entities.MedicinesRow), CheckNames = true)]
    public class MedicinesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MedicineId { get; set; }
        [EditLink]
        [Width(450)]
        public String MedicineName { get; set; }

        [Width(100)]
        public String FormFormName { get; set; }
        [Width(100)]
        public String BatchNo { get; set; }
        [Width(80)]
        public Int32 Quantity { get; set; }
        [Width(90)]
        public Decimal UnitPrice { get; set; }

        [Width(90)]
        public Int32 QuantityUsed { get; set; }
        [Width(80)]
        public int Balance { get; set; }
        [Width(95)]
        public DateTime InDate { get; set; }
        [Width(100)]
        [SortOrder(1,descending:false)]
        public DateTime ExpiryDate { get; set; }
        [Width(80)]
        public int DaysToExpire { get; set; }

        [Width(130)]
        public String MidManufacturerName { get; set; }
        [Width(130)]
        public String VidVendorName { get; set; }

    }
}