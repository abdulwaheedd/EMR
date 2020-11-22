
namespace EMR.FM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("FM.LkpServiceTypes")]
    [BasedOnRow(typeof(Entities.LkpServiceTypesRow), CheckNames = true)]
    public class LkpServiceTypesForm
    {
        public String ServiceTypeDari { get; set; }
        public String ServiceTypePashto { get; set; }
        public String ServiceTypeEn { get; set; }
    }
}