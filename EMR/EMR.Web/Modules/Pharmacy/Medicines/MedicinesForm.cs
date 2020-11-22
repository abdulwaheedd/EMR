
namespace EMR.Pharmacy.Forms
{
    using EMR.Common;
    using EMR.Configs.Entities;
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Pharmacy.Medicines")]
    [BasedOnRow(typeof(Entities.MedicinesRow), CheckNames = true)]
    public class MedicinesForm
    {
        [HalfWidth]
        public String GenericName { get; set; }
        [HalfWidth]
        public String BrandName { get; set; }
        [HalfWidth]
        public String Strength { get; set; }
        [HalfWidth]
        public Int32 FormId { get; set; }
        [HalfWidth]
        public Int32 Quantity { get; set; }
        [HalfWidth]
        public Decimal UnitPrice { get; set; }
        [HalfWidth]
        public String BatchNo { get; set; }
        [HalfWidth]
        [ReadOnly(true)]
        public Int32 QuantityUsed { get; set; }

        [HalfWidth]
        public DateTime InDate { get; set; }
        [HalfWidth]
        [ShamsiDatePickerEditor]
        public string SInDate { get; set; }
        [HalfWidth]
        public DateTime ExpiryDate { get; set; }
        [ShamsiDatePickerEditor]
        [HalfWidth]
        public string SExpiryDate { get; set; }
        [LookupEditor(typeof(LkpManufacturerRow))]
        [HalfWidth]
        public Int32 Mid { get; set; }
        [LookupEditor(typeof(LkpVendorRow))]
        [HalfWidth]
        public Int32 Vid { get; set; }
        [HalfWidth]
        public Boolean Discontinue { get; set; }
    }
}