
namespace EMR.Regs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;

    [FormScript("Regs.TblNewBornManagement")]
    [BasedOnRow(typeof(Entities.TblNewBornManagementRow), CheckNames = true)]
    public class TblNewBornManagementForm
    {
        [ReadOnly(true)]
        public Int64 AdId { get; set; }
        [LookupEditor(typeof(TblNbstatusRow))]
        public Int32 NbStatus { get; set; }
        [LookupEditor(typeof(TblNbResultRow))]
        public Int32 NbOutcome { get; set; }
        [LookupEditor(typeof(TblNbWeightRow))]
        public Int32 NbWeight { get; set; }
        [LookupEditor(typeof(TblChildRow))]
        public Int32 NbNumber { get; set; }
        [LookupEditor(typeof(TblGenderRow))]
        public Int32 NbGender { get; set; }
    }
}