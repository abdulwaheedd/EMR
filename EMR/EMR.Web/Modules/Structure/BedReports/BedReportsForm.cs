
namespace EMR.Structure.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Locations.Entities;

    [FormScript("Structure.BedReports")]
    [BasedOnRow(typeof(Entities.BedReportsRow), CheckNames = true)]
    public class BedReportsForm
    {
        [Category("General")]
        [LookupEditor(typeof(FacilityInfoRow))]
        public Int32 FacilityId { get; set; }
        public Int32 Year { get; set; }
        public Int32 Month { get; set; }
        public String Comment { get; set; }

        [Category("Details")]
        [BedReportDetailsEditor]
        public List<Entities.BedReportDetailsRow> DetailList { get; set; }
    }
}