
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.BloodStatus")]
    [BasedOnRow(typeof(Entities.BloodStatusRow), CheckNames = true)]
    public class BloodStatusForm
    {
        public String Bloodstatus { get; set; }
    }
}