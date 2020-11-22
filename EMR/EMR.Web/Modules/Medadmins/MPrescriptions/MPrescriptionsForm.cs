
namespace EMR.Medadmins.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Pharmacy.Entities;

    [FormScript("Medadmins.MPrescriptions")]
    [BasedOnRow(typeof(Entities.MPrescriptionsRow), CheckNames = true)]
    public class MPrescriptionsForm
    {
        public Int64 VisitId { get; set; }
        [LookupEditor(typeof(MedicinesRow))]
        public Int32 MedicineId { get; set; }
        public Int32 Quantity { get; set; }
        public String DailyDose { get; set; }
        public String Comment { get; set; }
    }
}