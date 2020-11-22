
namespace EMR.Regs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Regs.TblPatDetails")]
    [BasedOnRow(typeof(Entities.TblPatDetailsRow), CheckNames = true)]
    public class TblPatDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PdId { get; set; }
        [Width(150)]
        public String MRN { get; set; }
        [Width(120)]
        public String MridPatName { get; set; }
        [Width(100)]
        public String ProvinceDari { get; set; }
        [Width(100)]
        public Int32 DistrictId { get; set; }
        public String PatLocation { get; set; }
        [Width(100)]
        public string MariPatMaritalStatusDari { get; set; }
        [Width(100)]
        public String EidEducationDari { get; set; }
        [Width(100)]
        public String OidOccupationDari { get; set; }
        [Width(100)]
        public String PatPhone { get; set; }
        [Width(100)]
        public DateTime PatDdate { get; set; }
        public String PatDdateH { get; set; }
        public String UserName { get; set; }
        [Width(100)]
        public DateTime LastUpdated { get; set; }
        [Width(100)]
        public Int32 TenantId { get; set; }
    }
}