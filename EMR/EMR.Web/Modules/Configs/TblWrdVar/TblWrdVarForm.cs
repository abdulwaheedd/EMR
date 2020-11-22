
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblWrdVar")]
    [BasedOnRow(typeof(Entities.TblWrdVarRow), CheckNames = true)]
    public class TblWrdVarForm
    {
        public Int32 Wrdid { get; set; }
        public Int32 DiagnTreatComp { get; set; }
        public String VarNameEnglish { get; set; }
        public String VarNameDari { get; set; }
        public String VarNamePashto { get; set; }
        public String VarSpecification { get; set; }
    }
}