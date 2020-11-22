
namespace EMR.Verifications.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Common;

    [FormScript("Verifications.Cvitalsigns")]
    [BasedOnRow(typeof(Entities.CvitalsignsRow), CheckNames = true)]
    public class CvitalsignsForm
    {

        [Category("Identification")]
        [OneThirdWidth]
        public Int64 Mrid { get; set; }
        [OneThirdWidth]
        public Int64 VisitId { get; set; }
        [OneThirdWidth]
        public DateTime DateOfVisit { get; set; }
        [OneThirdWidth]
        [ShamsiDatePickerEditor]
        public String SDateOfVisit { get; set; }

        [ReadOnly(true)]
        [Category("Signs")]
        [OneThirdWidth]
        public int Weight { get; set; }
        [OneThirdWidth]
        public int Height { get; set; }
        [OneThirdWidth]
        public int Pulse { get; set; }
        [OneThirdWidth]
        public int Rr { get; set; }
        [OneThirdWidth]
        public int Temp { get; set; }
        [OneThirdWidth]
        public String Bp { get; set; }

        [OneThirdWidth]
        public int Hr { get; set; }
        [OneThirdWidth]
        public int O2 { get; set; }
        [OneThirdWidth]
        public int Pain { get; set; }
        [HalfWidth]
        [DateTimeEditor]
        public DateTime VitalDateTime { get; set; }
        [HalfWidth]
        [ShamsiDatePickerEditor]
        public String SVitalDate { get; set; }
    }
}