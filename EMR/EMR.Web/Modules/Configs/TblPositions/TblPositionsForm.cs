
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblPositions")]
    [BasedOnRow(typeof(Entities.TblPositionsRow), CheckNames = true)]
    public class TblPositionsForm
    {
        public String EmpId { get; set; }
        public Int32 DeptId { get; set; }
        public Int32 ProId { get; set; }
        public DateTime PosDate { get; set; }
        public String PosDateH { get; set; }
        public String UserName { get; set; }
        public DateTime LastUpdated { get; set; }
        public Int32 TenantId { get; set; }
    }
}