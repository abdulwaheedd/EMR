
namespace EMR.Regs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Regs.TblPatientNextOfKeen")]
    [BasedOnRow(typeof(Entities.TblPatientNextOfKeenRow), CheckNames = true)]
    public class TblPatientNextOfKeenColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PatNoKid { get; set; }
        [Width(150)]
        public String MRN { get; set; }
        [Width(150)]
        public String MridPatName { get; set; }
        [Width(150)]
        public String NoKNameD { get; set; }
        [Width(200)]
        public String NoKPhone { get; set; }
        [Width(200)]
        public String RelationTypeName { get; set; }
        [Width(200)]
        public String NoKAdd { get; set; }
        [Width(200)]
        public DateTime LastUpdated { get; set; }
        [Width(200)]
        public String UserName { get; set; }
        [Width(200)]
        [DisplayName("Tenant")]
        public Int32 TenantId { get; set; }
    }
}