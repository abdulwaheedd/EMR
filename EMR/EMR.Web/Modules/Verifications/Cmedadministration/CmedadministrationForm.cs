
namespace EMR.Verifications.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Modules.Medadmins;
    using EMR.Common;

    [FormScript("Verifications.Cmedadministration")]
    [BasedOnRow(typeof(Entities.CmedadministrationRow), CheckNames = true)]
    public class CmedadministrationForm
    {
        [LookupEditor(typeof(VisitsmedicineListLookup))]
        [ReadOnly(false)]
        public Int32 OrderId { get; set; }
        [ReadOnly(false)]
        public Int32 Quantity { get; set; }
        [ReadOnly(false)]
        [HtmlNoteContentEditor]
        public String Comment { get; set; }
        [DateTimeEditor]
        [HalfWidth]
        [ReadOnly(false)]
        public DateTime RecDateTime { get; set; }
        [ShamsiDatePickerEditor]
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