
namespace EMR.Pharmacy.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Pharmacy.Medicinelosses")]
    [BasedOnRow(typeof(Entities.MedicinelossesRow), CheckNames = true)]
    public class MedicinelossesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [Width(400)]
        public String MedicineGenericName { get; set; }
        public Int32 Quantity { get; set; }
        public DateTime OutDate { get; set; }
        [Width(120)]
        public String LosstypeName { get; set; }
    }
}