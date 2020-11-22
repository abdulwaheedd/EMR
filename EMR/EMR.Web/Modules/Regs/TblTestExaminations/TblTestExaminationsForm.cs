
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

    [FormScript("Regs.TblTestExaminations")]
    [BasedOnRow(typeof(Entities.TblTestExaminationsRow), CheckNames = true)]
    public class TblTestExaminationsForm
    {
        [ReadOnly(true)]
        public Int64 AdId { get; set; }
        [LookupEditor(typeof(TblDeptRow))]
        public Int32 EdId { get; set; }
        [LookupEditor(typeof(TblExaminationsDetailsRow),CascadeField = "DpId", CascadeFrom = "EdId")]
        public Int32 TestExaminations { get; set; }
        [LookupEditor(typeof(TblDiagnosisRow))]
        public Int32 Diagnosis { get; set; }
    }
}