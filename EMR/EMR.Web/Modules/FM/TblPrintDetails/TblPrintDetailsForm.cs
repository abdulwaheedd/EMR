
namespace EMR.FM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("FM.TblPrintDetails")]
    [BasedOnRow(typeof(Entities.TblPrintDetailsRow), CheckNames = true)]
    public class TblPrintDetailsForm
    {
        public Int64 FeeId { get; set; }
        public DateTime DateTimePrinted { get; set; }
        public String PrintedBy { get; set; }
    }
}