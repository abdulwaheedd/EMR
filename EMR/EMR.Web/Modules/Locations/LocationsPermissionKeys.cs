using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EMR.Locations
{
    public class PermissionKeys
    {
        [DisplayName("Provinces")]
        public class Provinces
        {
            public const string Insert = "Locations:Provinces:Insert";
            public const string Update = "Locations:Provinces:Update";
            public const string Delete = "Locations:Provinces:Delete";
            public const string View = "Locations:Provinces:View";
        }

        [DisplayName("Districts")]
        public class Districts
        {
            public const string Insert = "Locations:Districts:Insert";
            public const string Update = "Locations:Districts:Update";
            public const string Delete = "Locations:Districts:Delete";
            public const string View = "Locations:Districts:View";
        }

        [DisplayName("FacilityTypes")]
        public class FacilityTypes
        {
            public const string Insert = "Locations:FacilityTypes:Insert";
            public const string Update = "Locations:FacilityTypes:Update";
            public const string Delete = "Locations:FacilityTypes:Delete";
            public const string View = "Locations:FacilityTypes:View";
        }

        [DisplayName("FacilityInfo")]
        public class FacilityInfo
        {
            public const string Insert = "Locations:FacilityInfo:Insert";
            public const string Update = "Locations:FacilityInfo:Update";
            public const string Delete = "Locations:FacilityInfo:Delete";
            public const string View = "Locations:FacilityInfo:View";
        }

        [Description("[General]")]
        public const string General = "Locations:General";
    }
}