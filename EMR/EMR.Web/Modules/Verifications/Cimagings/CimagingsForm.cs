
namespace EMR.Verifications.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;

    [FormScript("Verifications.Cimagings")]
    [BasedOnRow(typeof(Entities.CimagingsRow), CheckNames = true)]
    public class CimagingsForm
    {
        public Int64 Mrid { get; set; }
        public Int64 VisitId { get; set; }
        [DateEditor]
        public DateTimeField DateOfVisit;
        public StringField SDateOfVisit;
        [LookupEditor(typeof(LkpImagingRow))]
        public Int32 ImagingId { get; set; }
        [ReadOnly(true)]
        public String TestImage { get; set; }
        [HtmlReportContentEditor]
        public String Note { get; set; }
    }
}