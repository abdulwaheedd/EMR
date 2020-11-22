
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.LkpManufacturer")]
    [BasedOnRow(typeof(Entities.LkpManufacturerRow), CheckNames = true)]
    public class LkpManufacturerForm
    {
        public String ManufacturerName { get; set; }
        public String ManufacturerType { get; set; }
        public Int32 CountryId { get; set; }
        public String Website { get; set; }
        public String Email { get; set; }
        public String CellPhoneNo { get; set; }
    }
}