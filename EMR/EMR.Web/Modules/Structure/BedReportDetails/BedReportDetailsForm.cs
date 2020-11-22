
namespace EMR.Structure.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;

    [FormScript("Structure.BedReportDetails")]
    [BasedOnRow(typeof(Entities.BedReportDetailsRow), CheckNames = true)]
    public class BedReportDetailsForm
    {
        [ReadOnly(true)]
        public Int32 ReportId { get; set; }
        [LookupEditor(typeof(TblWardRow))]
        public Int32 WardId { get; set; }
        public Int32 BedActive { get; set; }
    }
}