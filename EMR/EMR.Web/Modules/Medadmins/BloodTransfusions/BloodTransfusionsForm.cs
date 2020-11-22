
namespace EMR.Medadmins.Forms
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

    [FormScript("Medadmins.BloodTransfusions")]
    [BasedOnRow(typeof(Entities.BloodTransfusionsRow), CheckNames = true)]
    public class BloodTransfusionsForm
    {
        public Int64 VisitId { get; set; }
        [ReadOnly(true)]
        [LookupEditor(typeof(TblBloodGroupRow))]
        public Int32 BloodGroupId { get; set; }
        [ReadOnly(true)]
        public Int32 Recomquantity { get; set; }
        [ReadOnly(true)]
        public Int32 Transmitquantity { get; set; }
        [ReadOnly(true)]
        [LookupEditor(typeof(BloodStatusRow))]
        public Int32 BloodstatusId { get; set; }
        [ReadOnly(true)]
        [DateTimeEditor]
        public DateTime RecDateTime { get; set; }
        [ReadOnly(true)]
        public String SRecDate { get; set; }
        [DateTimeEditor]
        public DateTime TransDateTime { get; set; }
        [ShamsiDatePickerEditor]
        public String STransDate { get; set; }
    }
}