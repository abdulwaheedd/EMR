
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.LkpForm")]
    [BasedOnRow(typeof(Entities.LkpFormRow), CheckNames = true)]
    public class LkpFormForm
    {
        public String FormName { get; set; }
    }
}