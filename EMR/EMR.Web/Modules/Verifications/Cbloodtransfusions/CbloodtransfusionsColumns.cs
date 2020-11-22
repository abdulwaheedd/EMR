
namespace EMR.Verifications.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Verifications.Cbloodtransfusions")]
    [BasedOnRow(typeof(Entities.CbloodtransfusionsRow), CheckNames = true)]
    public class CbloodtransfusionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TransfusionId { get; set; }
        [Width(80)]
        [EditLink]
        public Int64 VisitId { get; set; }
        [Width(120)]
        public DateTime DateOfVisit { get; set; }
        [Width(120)]
        public String SDateOfVisit { get; set; }
        [Width(150)]
        public String BloodGroup { get; set; }
        [Width(100)]
        public String Bloodstatus { get; set; }
        [Width(100)]
        public Int32 Recomquantity { get; set; }
        [Width(100)]
        public Int32 Transmitquantity { get; set; }
        [Width(130)]
        [DisplayFormat("dd/MM/yyyy HH:mm:ss")]
        public DateTime RecDateTime { get; set; }
        [Width(130)]
        [DisplayFormat("dd/MM/yyyy HH:mm:ss")]
        public DateTime TransDateTime { get; set; }
    }
}