
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.LkpManufacturer")]
    [BasedOnRow(typeof(Entities.LkpManufacturerRow), CheckNames = true)]
    public class LkpManufacturerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ManufacturerId { get; set; }
        [EditLink]
        public String ManufacturerName { get; set; }
        public String ManufacturerType { get; set; }
        public Int32 CountryId { get; set; }
        public String Website { get; set; }
        public String Email { get; set; }
        public String CellPhoneNo { get; set; }
    }
}