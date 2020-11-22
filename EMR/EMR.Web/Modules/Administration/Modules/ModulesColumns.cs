
namespace EMR.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Modules")]
    [BasedOnRow(typeof(Entities.ModulesRow), CheckNames = true)]
    public class ModulesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ModuleId { get; set; }
        [EditLink]
        public String ModuleName { get; set; }
        public String ModuleDescription { get; set; }
    }
}