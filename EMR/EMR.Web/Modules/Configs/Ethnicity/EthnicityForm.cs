
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.Ethnicity")]
    [BasedOnRow(typeof(Entities.EthnicityRow), CheckNames = true)]
    public class EthnicityForm
    {
        public String EthnicityName { get; set; }
    }
}