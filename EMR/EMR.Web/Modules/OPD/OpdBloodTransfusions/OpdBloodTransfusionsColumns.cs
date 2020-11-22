
namespace EMR.OPD.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;


    [ColumnsScript("OPD.OpdBloodTransfusions")]
    [BasedOnRow(typeof(Entities.OpdBloodTransfusionsRow), CheckNames = true)]
    public class OpdBloodTransfusionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TransfusionId { get; set; }
        public Int64 VisitId { get; set; }
        public String BloodGroup { get; set; }
        public Int32 Recomquantity { get; set; }
        public Int32 Transmitquantity { get; set; }
        public String Bloodstatus { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm:ss")]
        [HalfWidth]
        public DateTime RecDateTime { get; set; }
        [HalfWidth]
        public String SRecDate { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm:ss")]
        [HalfWidth]
        public DateTime TransDateTime { get; set; }
        [HalfWidth]
        public String STransDate { get; set; }
    }
}