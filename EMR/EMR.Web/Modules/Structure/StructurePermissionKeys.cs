using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EMR.Structure
{
    public class PermissionKeys
    {
        [DisplayName("Bed Report Details")]
        public class BedReportDetails
        {
            public const string Insert = "Structure:BedReportDetails:Insert";
            public const string Update = "Structure:BedReportDetails:Update";
            public const string Delete = "Structure:BedReportDetails:Delete";
            public const string View = "Structure:BedReportDetails:View";
        }

        [DisplayName("Bed Reports")]
        public class BedReports
        {
            public const string Insert = "Structure:BedReports:Insert";
            public const string Update = "Structure:BedReports:Update";
            public const string Delete = "Structure:BedReports:Delete";
            public const string View = "Structure:BedReports:View";
        }
        [Description("[General]")]
        public const string General = "Structure:General";
    }
}