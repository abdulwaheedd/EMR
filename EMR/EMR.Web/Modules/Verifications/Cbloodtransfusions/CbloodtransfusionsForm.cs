
namespace EMR.Verifications.Forms
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

    [FormScript("Verifications.Cbloodtransfusions")]
    [BasedOnRow(typeof(Entities.CbloodtransfusionsRow), CheckNames = true)]
    public class CbloodtransfusionsForm
    {
        [HalfWidth]
        public Int64 Mrid { get; set; }
        [HalfWidth]
        public Int64 VisitId { get; set; }
        [HalfWidth]
        public DateTime DateOfVisit { get; set; }
        [HalfWidth]
        public String SDateOfVisit { get; set; }
        [LookupEditor(typeof(TblBloodGroupRow))]
        public Int32 BloodGroupId { get; set; }
        public Int32 Recomquantity { get; set; }
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