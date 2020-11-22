
namespace EMR.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.DashboardUrl")]
    [BasedOnRow(typeof(Entities.DashboardUrlRow), CheckNames = true)]
    public class DashboardUrlColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        [Width(500)]
        public String Url { get; set; }
        [Width(200)]
        public Boolean Active { get; set; }
    }
}