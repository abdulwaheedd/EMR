
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.LkpUnit")]
    [BasedOnRow(typeof(Entities.LkpUnitRow), CheckNames = true)]
    public class LkpUnitForm
    {
        public String UnitName { get; set; }
    }
}