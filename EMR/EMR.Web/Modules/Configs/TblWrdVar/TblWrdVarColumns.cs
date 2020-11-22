
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblWrdVar")]
    [BasedOnRow(typeof(Entities.TblWrdVarRow), CheckNames = true)]
    public class TblWrdVarColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Wvid { get; set; }
        public String WrdidWardName { get; set; }
        public Int32 DiagnTreatComp { get; set; }
        public String VarNameEnglish { get; set; }
        public String VarNameDari { get; set; }
        public String VarNamePashto { get; set; }
        public String VarSpecification { get; set; }
    }
}