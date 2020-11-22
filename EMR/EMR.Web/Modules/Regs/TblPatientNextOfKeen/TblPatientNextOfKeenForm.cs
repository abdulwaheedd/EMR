
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

    [FormScript("Regs.TblPatientNextOfKeen")]
    [BasedOnRow(typeof(Entities.TblPatientNextOfKeenRow), CheckNames = true)]
    public class TblPatientNextOfKeenForm
    {
        [HideOnInsert]
        public Int64 Mrid { get; set; }
        [HideOnInsert,ReadOnly(true)]
        public String MRN { get; set; }
        public String NoKNameD { get; set; }
        public String NoKPhone { get; set; }
        [LookupEditor(typeof(TblRelationRow))]
        public Int32 NoKRelationType { get; set; }
        public String NoKAdd { get; set; }
    }
}