
namespace EMR.Verifications.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Pharmacy.Entities;

    [FormScript("Verifications.Cmedprescriptions")]
    [BasedOnRow(typeof(Entities.CmedprescriptionsRow), CheckNames = true)]
    public class CmedprescriptionsForm
    {
        public Int64 Mrid { get; set; }
        public Int64 VisitId { get; set; }
        public DateTime DateOfVisit { get; set; }
        public String SDateOfVisit { get; set; }
        [LookupEditor(typeof(MedicinesRow))]
        public Int32 MedicineId { get; set; }
        public Int32 Quantity { get; set; }
        public String DailyDose { get; set; }
        [HtmlNoteContentEditor]
        public String Comment { get; set; }
        //public Boolean InsideSale { get; set; }
    }
}