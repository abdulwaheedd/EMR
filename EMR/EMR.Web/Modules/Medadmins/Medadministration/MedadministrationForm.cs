
namespace EMR.Medadmins.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Medadmins.Entities;
    using EMR.Common;
    using EMR.Modules.Medadmins;

    [FormScript("Medadmins.Medadministration")]
    [BasedOnRow(typeof(Entities.MedadministrationRow), CheckNames = false)]
    public class MedadministrationForm
    {
        //[LookupEditor(typeof(VisitsmedicineListLookup))]
        [ReadOnly(true)]
        public Int32 OrderId { get; set; }
        [ReadOnly(true)]
        public string Medicine { get; set; }
        [ReadOnly(true)]
        public Int32 Quantity { get; set; }
        [HtmlNoteContentEditor]
        public String Comment { get; set; }
        [DateTimeEditor]
        [HalfWidth]
        [ReadOnly(true)]
        public DateTime RecDateTime { get; set; }
        [ReadOnly(true)]
        [HalfWidth]
        public String RecSDate { get; set; }
        [DateTimeEditor]
        [HalfWidth]
        public DateTime AppDateTime { get; set; }
        [ShamsiDatePickerEditor]
        [HalfWidth]
        public String AppSDate { get; set; }
    }
}