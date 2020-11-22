
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TopographyMain")]
    [BasedOnRow(typeof(Entities.TopographyMainRow), CheckNames = true)]
    public class TopographyMainForm
    {
        public String TopographyMName { get; set; }
        public String Icd0Code { get; set; }
    }
}