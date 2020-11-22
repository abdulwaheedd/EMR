using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EMR.Register
{
    public class PermissionKeys
    {
        [DisplayName("Registeration Patients")]
        public class Regoutpatients
        {
            public const string Insert = "Register:Regoutpatients:Insert";
            public const string Update = "Register:Regoutpatients:Update";
            public const string Delete = "Register:Regoutpatients:Delete";
            public const string View = "Register:Regoutpatients:View";
        }

        [DisplayName("Registeration visits")]
        public class Regvisits
        {
            public const string Insert = "Register:Regvisits:Insert";
            public const string Update = "Register:Regvisits:Update";
            public const string Delete = "Register:Regvisits:Delete";
            public const string View = "Register:Regvisits:View";
        }

        [DisplayName("Users/Doctors List")]
        public class Nameslist
        {
            public const string Insert = "Register:Nameslist:Insert";
            public const string Update = "Register:Nameslist:Update";
            public const string Delete = "Register:Nameslist:Delete";
            public const string View = "Register:Nameslist:View";
        }
        
        [DisplayName("Patient Relatives")]
        public class PatAttendants
        {
            public const string Insert = "Register:PatAttendants:Insert";
            public const string Update = "Register:PatAttendants:Update";
            public const string Delete = "Register:PatAttendants:Delete";
            public const string View = "Register:PatAttendants:View";
        }

        [Description("[General]")]
        public const string General = "Register:General";
    }
}