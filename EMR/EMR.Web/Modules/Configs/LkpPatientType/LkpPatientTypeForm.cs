
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.LkpPatientType")]
    [BasedOnRow(typeof(Entities.LkpPatientTypeRow), CheckNames = true)]
    public class LkpPatientTypeForm
    {
        public String TypeNameEn { get; set; }
        public String TypeNameDari { get; set; }
        public String TypeNamePashto { get; set; }
    }
}