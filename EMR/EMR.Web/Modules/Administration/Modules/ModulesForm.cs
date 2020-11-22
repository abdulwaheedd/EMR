
namespace EMR.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Modules")]
    [BasedOnRow(typeof(Entities.ModulesRow), CheckNames = true)]
    public class ModulesForm
    {
        public String ModuleName { get; set; }
        public String ModuleDescription { get; set; }
    }
}