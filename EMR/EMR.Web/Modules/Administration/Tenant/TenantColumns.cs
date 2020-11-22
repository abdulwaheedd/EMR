
namespace EMR.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Tenant")]
    [BasedOnRow(typeof(Entities.TenantRow))]
    public class TenantColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TenantId { get; set; }
        [EditLink]
        [Width(200)]
        public String TenantName { get; set; }
        [Width(100)]
        public Int32 FacilityId { get; set; }
        [Width(300)]
        public String FacilityName { get; set; }
    }
}