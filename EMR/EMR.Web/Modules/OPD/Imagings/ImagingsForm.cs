
namespace EMR.OPD.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;

    [FormScript("OPD.Imagings")]
    [BasedOnRow(typeof(Entities.ImagingsRow), CheckNames = true)]
    public class ImagingsForm
    {
        public Int64 VisitId { get; set; }
        [LookupEditor(typeof(LkpImagingRow))]
        public Int32 ImagingId { get; set; }
        [ReadOnly(true)]
        public String TestImage { get; set; }
        [HtmlReportContentEditor]
        public String Note { get; set; }
    }
}