
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.LkpLabTest")]
    [BasedOnRow(typeof(Entities.LkpLabTestRow), CheckNames = true)]
    public class LkpLabTestColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,SortOrder(1,descending:true)]
        public Int32 LabTestId { get; set; }
        [EditLink]
        [Width(200)]
        public String LabTestName { get; set; }
        [Width(200)]
        public String TestTypeName { get; set; }
        [Width(150)]
        public String NormalRange { get; set; }
        [Width(150)]
        public String Unit { get; set; }
        [Width(150)]
        public Double TestPrice { get; set; }

    }
}