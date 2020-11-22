using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EMR.LabTest
{
    public class PermissionKeys
    {
        [DisplayName("Lab Patients")]
        public class LabPatients
        {
            public const string Insert = "LabTest:LabPatients:Insert";
            public const string Update = "LabTest:LabPatients:Update";
            public const string Delete = "LabTest:LabPatients:Delete";
            public const string View = "LabTest:LabPatients:View";
        }

        [DisplayName("Lab Tests")]
        public class LabTests
        {
            public const string Insert = "LabTest:LabTests:Insert";
            public const string Update = "LabTest:LabTests:Update";
            public const string Delete = "LabTest:LabTests:Delete";
            public const string View = "LabTest:LabTests:View";
        }

        [DisplayName("Lab visits")]
        public class Labvisits
        {
            public const string Insert = "LabTest:Labvisits:Insert";
            public const string Update = "LabTest:Labvisits:Update";
            public const string Delete = "LabTest:Labvisits:Delete";
            public const string View = "LabTest:Labvisits:View";
        }

        [Description("[General]")]
        public const string General = "LabTest:General";
    }
}