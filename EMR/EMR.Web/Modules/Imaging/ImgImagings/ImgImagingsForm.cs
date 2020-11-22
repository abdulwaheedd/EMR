
namespace EMR.Imaging.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;

    [FormScript("Imaging.ImgImagings")]
    [BasedOnRow(typeof(Entities.ImgImagingsRow), CheckNames = true)]
    public class ImgImagingsForm
    {
        public Int64 VisitId { get; set; }
        [LookupEditor(typeof(LkpImagingRow))]
        [ReadOnly(true)]
        public Int32 ImagingId { get; set; }
        public String TestImage { get; set; }
        [HtmlReportContentEditor]
        public String Note { get; set; }
    }
}