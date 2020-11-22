
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
    using EMR.Modules.Regs.TblOperations;

    [FormScript("Regs.TblOperations")]
    [BasedOnRow(typeof(Entities.TblOperationsRow), CheckNames = false)]
    public class TblOperationsForm
    {

        public Int64 AdId { get; set; }
        [LookupEditor(typeof(TblWardRow))]
        public Int32 WardId { get; set; }
        [LookupEditor(typeof(TblWrdVarRow), CascadeFrom = "WardId", CascadeField = "Wrdid")]
        public Int32 Wvid { get; set; }      
        [LookupEditor(typeof(DiseaseListLookup),CascadeFrom ="Wvid",CascadeField = "WvId", AutoComplete =true)]
        public Int32 AdValue { get; set; }
        public String Remarks { get; set; }
    }
}