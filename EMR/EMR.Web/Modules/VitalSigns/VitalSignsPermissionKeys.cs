using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EMR.VitalSigns
{
    public class PermissionKeys
    {
        [DisplayName("Vital Patients")]
        public class VitalPatients
        {
            public const string Insert = "VitalSigns:VitalPatients:Insert";
            public const string Update = "VitalSigns:VitalPatients:Update";
            public const string Delete = "VitalSigns:VitalPatients:Delete";
            public const string View = "VitalSigns:VitalPatients:View";
        }

        [DisplayName("Vital visits")]
        public class Vitalvisits
        {
            public const string Insert = "VitalSigns:Vitalvisits:Insert";
            public const string Update = "VitalSigns:Vitalvisits:Update";
            public const string Delete = "VitalSigns:Vitalvisits:Delete";
            public const string View = "VitalSigns:Vitalvisits:View";
        }

        [DisplayName("Vital Signs")]
        public class VVitalSigns
        {
            public const string Insert = "VitalSigns:VVitalSigns:Insert";
            public const string Update = "VitalSigns:VVitalSigns:Update";
            public const string Delete = "VitalSigns:VVitalSigns:Delete";
            public const string View = "VitalSigns:VVitalSigns:View";
        }
        [DisplayName("Cycle Schedules")]
        public class Scheduling
        {
            public const string Insert = "VitalSigns:Scheduling:Insert";
            public const string Update = "VitalSigns:Scheduling:Update";
            public const string Delete = "VitalSigns:Scheduling:Delete";
            public const string View = "VitalSigns:Scheduling:View";
        }

        [DisplayName("Cycle Visits")]
        public class Cyclevisits
        {
            public const string Insert = "VitalSigns:Cyclevisits:Insert";
            public const string Update = "VitalSigns:Cyclevisits:Update";
            public const string Delete = "VitalSigns:Cyclevisits:Delete";
            public const string View = "VitalSigns:Cyclevisits:View";
        }

        [Description("[General]")]
        public const string General = "VitalSigns:General";
    }
}