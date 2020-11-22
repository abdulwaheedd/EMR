
namespace EMR.OPD.Forms
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

    [FormScript("OPD.OpdMedadministration")]
    [BasedOnRow(typeof(Entities.OpdMedadministrationRow), CheckNames = false)]
    public class OpdMedadministrationForm
    {
        //[LookupEditor(typeof(VisitsmedicineListLookup))]
        public Int32 OrderId { get; set; }
        [ReadOnly(true)]
        public string Medicine { get; set; }
        public Int32 Quantity { get; set; }
        [HtmlNoteContentEditor]
        public String Comment { get; set; }
        [DateTimeEditor]
        [HalfWidth]
        public DateTime RecDateTime { get; set; }
        [ShamsiDatePickerEditor]
        [HalfWidth]
        public String RecSDate { get; set; }
        [DateTimeEditor]
        [HalfWidth]
        [ReadOnly(true)]
        public DateTime AppDateTime { get; set; }
        [HalfWidth]
        [ReadOnly(true)]
        public String AppSDate { get; set; }
    }
}