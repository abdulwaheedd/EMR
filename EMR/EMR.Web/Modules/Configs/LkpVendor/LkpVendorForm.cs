
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.LkpVendor")]
    [BasedOnRow(typeof(Entities.LkpVendorRow), CheckNames = true)]
    public class LkpVendorForm
    {
        public String VendorName { get; set; }
        public String VendorType { get; set; }
        public Int32 VendorRegNo { get; set; }
        public String Email { get; set; }
        public String CellPhoneNo { get; set; }
    }
}