
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblAbortionType")]
    [BasedOnRow(typeof(Entities.TblAbortionTypeRow), CheckNames = true)]
    public class TblAbortionTypeForm
    {
        public String AbortionTypeDari { get; set; }
        public String AbortionTypePashto { get; set; }
        public String AbortionTypeEn { get; set; }
    }
}