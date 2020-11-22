
namespace EMR.Pharmacy.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Pharmacy.Entities;

    [FormScript("Pharmacy.MedPrescriptions")]
    [BasedOnRow(typeof(Entities.MedPrescriptionsRow), CheckNames = true)]
    public class MedPrescriptionsForm
    {
        public Int64 VisitId { get; set; }
        [LookupEditor(typeof(MedicinesRow))]
        public Int32 MedicineId { get; set; }
        public Int32 Quantity { get; set; }
        public String DailyDose { get; set; }
        public String Comment { get; set; }
        public Boolean InsideSale { get; set; }
    }
}