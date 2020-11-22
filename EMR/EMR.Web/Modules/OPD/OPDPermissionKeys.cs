using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EMR.OPD
{
    public class PermissionKeys
    {
        [DisplayName("Patients")]
        public class Patients
        {
            public const string Insert = "OPD:Patients:Insert";
            public const string Update = "OPD:Patients:Update";
            public const string Delete = "OPD:Patients:Delete";
            public const string View = "OPD:Patients:View";
        }

        [DisplayName("Patient History")]
        public class PatientHistory
        {
            public const string Insert = "OPD:PatientHistory:Insert";
            public const string Update = "OPD:PatientHistory:Update";
            public const string Delete = "OPD:PatientHistory:Delete";
            public const string View = "OPD:PatientHistory:View";
        }

        [DisplayName("Lab Tests")]
        public class LabTest
        {
            public const string Insert = "OPD:LabTest:Insert";
            public const string Update = "OPD:LabTest:Update";
            public const string Delete = "OPD:LabTest:Delete";
            public const string View = "OPD:LabTest:View";
        }

        [DisplayName("Imagings")]
        public class Imagings
        {
            public const string Insert = "OPD:Imagings:Insert";
            public const string Update = "OPD:Imagings:Update";
            public const string Delete = "OPD:Imagings:Delete";
            public const string View = "OPD:Imagings:View";
        }
        
        [DisplayName("Physical Examinations")]
        public class PhysicalExamination
        {
            public const string Insert = "OPD:PhysicalExamination:Insert";
            public const string Update = "OPD:PhysicalExamination:Update";
            public const string Delete = "OPD:PhysicalExamination:Delete";
            public const string View = "OPD:PhysicalExamination:View";
        }        
        [DisplayName("Prescriptions")]
        public class Prescriptions
        {
            public const string Insert = "OPD:Prescriptions:Insert";
            public const string Update = "OPD:Prescriptions:Update";
            public const string Delete = "OPD:Prescriptions:Delete";
            public const string View = "OPD:Prescriptions:View";
        }

        [DisplayName("Recommedations")]
        public class Recommedations
        {
            public const string Insert = "OPD:Recommedations:Insert";
            public const string Update = "OPD:Recommedations:Update";
            public const string Delete = "OPD:Recommedations:Delete";
            public const string View = "OPD:Recommedations:View";
        }

        [DisplayName("Visits")]
        public class Visits
        {
            public const string Insert = "OPD:Visits:Insert";
            public const string Update = "OPD:Visits:Update";
            public const string Delete = "OPD:Visits:Delete";
            public const string View = "OPD:Visits:View";
        }
        [DisplayName("VitalSigns")]
        public class VitalSigns
        {
            public const string Insert = "OPD:VitalSigns:Insert";
            public const string Update = "OPD:VitalSigns:Update";
            public const string Delete = "OPD:VitalSigns:Delete";
            public const string View = "OPD:VitalSigns:View";
        }

        [DisplayName("Diagnosis")]
        public class Diagnosis
        {
            public const string Insert = "OPD:Diagnosis:Insert";
            public const string Update = "OPD:Diagnosis:Update";
            public const string Delete = "OPD:Diagnosis:Delete";
            public const string View = "OPD:Diagnosis:View";
        }

        [DisplayName("Cycle Plans")]
        public class Vscheduling
        {
            public const string Insert = "OPD:Vscheduling:Insert";
            public const string Update = "OPD:Vscheduling:Update";
            public const string Delete = "OPD:Vscheduling:Delete";
            public const string View = "OPD:Vscheduling:View";
        }
        
        [DisplayName("Blood Transfusions")]
        public class BloodTransfusions
        {
            public const string Insert = "OPD:BloodTransfusions:Insert";
            public const string Update = "OPD:BloodTransfusions:Update";
            public const string Delete = "OPD:BloodTransfusions:Delete";
            public const string View = "OPD:BloodTransfusions:View";
        }
                
        [DisplayName("Medicine administration")]
        public class Medadministration
        {
            public const string Insert = "OPD:Medadministration:Insert";
            public const string Update = "OPD:Medadministration:Update";
            public const string Delete = "OPD:Medadministration:Delete";
            public const string View = "OPD:Medadministration:View";
        }

        [Description("[General]")]
        public const string General = "OPD:General";
    }
}