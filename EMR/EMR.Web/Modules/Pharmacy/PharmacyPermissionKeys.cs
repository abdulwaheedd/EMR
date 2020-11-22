using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EMR.Pharmacy
{
    public class PermissionKeys
    {
        [DisplayName("Medicines")]
        public class Medicines
        {
            public const string Insert = "Pharmacy:Medicines:Insert";
            public const string Update = "Pharmacy:Medicines:Update";
            public const string Delete = "Pharmacy:Medicines:Delete";
            public const string View = "Pharmacy:Medicines:View";
        }

        [DisplayName("Medicine Patients")]
        public class MedPatients
        {
            public const string Insert = "Pharmacy:MedPatients:Insert";
            public const string Update = "Pharmacy:MedPatients:Update";
            public const string Delete = "Pharmacy:MedPatients:Delete";
            public const string View = "Pharmacy:MedPatients:View";
        }

        [DisplayName("Prescriptions")]
        public class MedPrescriptions
        {
            public const string Insert = "Pharmacy:MedPrescriptions:Insert";
            public const string Update = "Pharmacy:MedPrescriptions:Update";
            public const string Delete = "Pharmacy:MedPrescriptions:Delete";
            public const string View = "Pharmacy:MedPrescriptions:View";
        }
        
        [DisplayName("Medicine visits")]
        public class Medvisits
        {
            public const string Insert = "Pharmacy:Medvisits:Insert";
            public const string Update = "Pharmacy:Medvisits:Update";
            public const string Delete = "Pharmacy:Medvisits:Delete";
            public const string View = "Pharmacy:Medvisits:View";
        }


        [DisplayName("Medicine losses, expiration, and damages")]
        public class Medicinelosses
        {
            public const string Insert = "Pharmacy:Medicinelosses:Insert";
            public const string Update = "Pharmacy:Medicinelosses:Update";
            public const string Delete = "Pharmacy:Medicinelosses:Delete";
            public const string View = "Pharmacy:Medicinelosses:View";
        }

        [Description("[General]")]
        public const string General = "Pharmacy:General";
    }
}