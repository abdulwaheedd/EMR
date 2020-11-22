using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EMR.Medadmins
{
    public class PermissionKeys
    {
        [DisplayName("Medicine administration")]
        public class Medadministration
        {
            public const string Insert = "Medadmins:Medadministration:Insert";
            public const string Update = "Medadmins:Medadministration:Update";
            public const string Delete = "Medadmins:Medadministration:Delete";
            public const string View = "Medadmins:Medadministration:View";
        }

        [DisplayName("Patients list")]
        public class Medadminpatients
        {
            public const string Insert = "Medadmins:Medadminpatients:Insert";
            public const string Update = "Medadmins:Medadminpatients:Update";
            public const string Delete = "Medadmins:Medadminpatients:Delete";
            public const string View = "Medadmins:Medadminpatients:View";
        }

        [DisplayName("Medvisits")]
        public class Medvisits
        {
            public const string Insert = "Medadmins:Medvisits:Insert";
            public const string Update = "Medadmins:Medvisits:Update";
            public const string Delete = "Medadmins:Medvisits:Delete";
            public const string View = "Medadmins:Medvisits:View";
        }
        [DisplayName("Medicine")]
        public class Visitsmedicine
        {
            public const string Insert = "Medadmins:Visitsmedicine:Insert";
            public const string Update = "Medadmins:Visitsmedicine:Update";
            public const string Delete = "Medadmins:Visitsmedicine:Delete";
            public const string View = "Medadmins:Visitsmedicine:View";
        }
        [DisplayName("Blood Transfusions")]
        public class BloodTransfusions
        {
            public const string Insert = "Medadmins:BloodTransfusions:Insert";
            public const string Update = "Medadmins:BloodTransfusions:Update";
            public const string Delete = "Medadmins:BloodTransfusions:Delete";
            public const string View = "Medadmins:BloodTransfusions:View";
        }

        public class MPrescriptions
        {
            public const string Insert = "Medadmins:MPrescriptions:Insert";
            public const string Update = "Medadmins:MPrescriptions:Update";
            public const string Delete = "Medadmins:MPrescriptions:Delete";
            public const string View = "Medadmins:MPrescriptions:View";
        }



        [Description("[General]")]
        public const string General = "Medadmins:General";
    }
}