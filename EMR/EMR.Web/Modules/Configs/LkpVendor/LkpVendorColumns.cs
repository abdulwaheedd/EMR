
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.LkpVendor")]
    [BasedOnRow(typeof(Entities.LkpVendorRow), CheckNames = true)]
    public class LkpVendorColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 VendorId { get; set; }
        [EditLink]
        public String VendorName { get; set; }
        public String VendorType { get; set; }
        public Int32 VendorRegNo { get; set; }
        public String Email { get; set; }
        public String CellPhoneNo { get; set; }
    }
}