
namespace EMR.Medadmins.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Medadmins.BloodTransfusions")]
    [BasedOnRow(typeof(Entities.BloodTransfusionsRow), CheckNames = true)]
    public class BloodTransfusionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TransfusionId { get; set; }
        public Int64 VisitId { get; set; }
        public String BloodGroup { get; set; }
        public Int32 Recomquantity { get; set; }
        public Int32 Transmitquantity { get; set; }
        public String Bloodstatus { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm:ss")]
        public DateTime RecDateTime { get; set; }
        [DisplayFormat("dd/MM/yyyy HH:mm:ss")]
        public DateTime TransDateTime { get; set; }
    }
}