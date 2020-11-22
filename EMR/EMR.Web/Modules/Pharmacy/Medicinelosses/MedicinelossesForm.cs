
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

    [FormScript("Pharmacy.Medicinelosses")]
    [BasedOnRow(typeof(Entities.MedicinelossesRow), CheckNames = true)]
    public class MedicinelossesForm
    {
        [LookupEditor(typeof(MedicinesRow))]
        public Int32 MedicineId { get; set; }
        public Int32 Quantity { get; set; }
        public DateTime OutDate { get; set; }
        [LookupEditor(typeof(Configs.Entities.LkpLosstypesRow))]
        public Int32 LosstypeId { get; set; }
    }
}