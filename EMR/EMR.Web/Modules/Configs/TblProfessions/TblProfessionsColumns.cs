
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblProfessions")]
    [BasedOnRow(typeof(Entities.TblProfessionsRow), CheckNames = true)]
    public class TblProfessionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProId { get; set; }
        public String ProName { get; set; }
        public String ProNameD { get; set; }
    }
}