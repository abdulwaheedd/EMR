
namespace EMR.Medadmins.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Medadmins.Medadministration")]
    [BasedOnRow(typeof(Entities.MedadministrationRow), CheckNames = true)]
    public class MedadministrationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 MedadminId { get; set; }
        [Width(300)]
        public string Medicine { get; set; }
        [Width(130)]
        public Int32 Quantity { get; set; }
        [Width(300)]
        public String Comment { get; set; }
        [Width(200)]
        [DisplayFormat("dd/MM/yyyy HH:mm:ss")]
        public DateTime RecDateTime { get; set; }
        [Width(200)]
        [DisplayFormat("dd/MM/yyyy HH:mm:ss")]
        public DateTime AppDateTime { get; set; }
    }
}