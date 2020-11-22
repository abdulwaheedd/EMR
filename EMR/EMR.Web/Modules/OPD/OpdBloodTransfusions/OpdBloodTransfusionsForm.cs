
namespace EMR.OPD.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;
    using EMR.Common;

    [FormScript("OPD.OpdBloodTransfusions")]
    [BasedOnRow(typeof(Entities.OpdBloodTransfusionsRow), CheckNames = true)]
    public class OpdBloodTransfusionsForm
    {
        public Int64 VisitId { get; set; }
        [LookupEditor(typeof(TblBloodGroupRow))]
        public Int32 BloodGroupId { get; set; }
        public Int32 Recomquantity { get; set; }
        [ReadOnly(true)]
        public Int32 Transmitquantity { get; set; }
        [LookupEditor(typeof(BloodStatusRow))]
        public Int32 BloodstatusId { get; set; }
        [DateTimeEditor]
        [HalfWidth]
        public DateTime RecDateTime { get; set; }
        [ShamsiDatePickerEditor]
        [HalfWidth]
        public String SRecDate { get; set; }
        [DateTimeEditor]
        [HalfWidth]
        [ReadOnly(true)]
        public DateTime TransDateTime { get; set; }
        [HalfWidth]
        [ReadOnly(true)]
        public String STransDate { get; set; }
    }
}