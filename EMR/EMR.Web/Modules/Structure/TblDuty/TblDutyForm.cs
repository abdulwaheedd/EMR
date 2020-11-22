
namespace EMR.Structure.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Structure.TblDuty")]
    [BasedOnRow(typeof(Entities.TblDutyRow), CheckNames = true)]
    public class TblDutyForm
    {
        public String EmpId { get; set; }
        public Int32 WardId { get; set; }
        public Int32 DutYear { get; set; }
        public Int32 DutMonth { get; set; }
        public String UserName { get; set; }
        public DateTime LastUpdated { get; set; }
        public Int32 TenantId { get; set; }
    }
}