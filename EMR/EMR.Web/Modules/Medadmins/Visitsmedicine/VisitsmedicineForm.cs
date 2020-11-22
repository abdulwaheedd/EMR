
namespace EMR.Medadmins.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Medadmins.Visitsmedicine")]
    [BasedOnRow(typeof(Entities.VisitsmedicineRow), CheckNames = true)]
    public class VisitsmedicineForm
    {
        public Int64 VisitId { get; set; }
        public Int64 Mrid { get; set; }
        public String Medicine { get; set; }
    }
}