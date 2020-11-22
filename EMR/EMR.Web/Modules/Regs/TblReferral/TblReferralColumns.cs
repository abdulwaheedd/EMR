
namespace EMR.Regs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Regs.TblReferral")]
    [BasedOnRow(typeof(Entities.TblReferralRow), CheckNames = true)]
    public class TblReferralColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RefId { get; set; }
        [Width(100)]
        public Int64Field AdId { get; set; }
        [Width(100)]
        public Int64Field AdMrid { get; set; }
        [Width(200)]
        public String FacilityName { get; set; }
        [Width(120)]
        public String WardName { get; set; }
        [Width(150)]
        public String DiseaseName { get; set; }
        [Width(100)]
        public DateTime RefDate { get; set; }
        [Width(100)]
        public String RefDateH { get; set; }
        [Width(100)]
        public String RefType { get; set; }
        [Width(100)]
        public String UserName { get; set; }
        [Width(100)]
        public DateTime LastUpdated { get; set; }
        [Width(100)]
        public Int32 TenantId { get; set; }
    }
}