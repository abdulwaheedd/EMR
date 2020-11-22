using Serenity.Extensibility;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EMR.Regs
{
    [NestedPermissionKeys]
    public class PermissionKeys
    {
        public class TblPatients
        {
            public const string Insert = "Regs:Patients:Insert";
            public const string Update = "Regs:Patients:Update";
            public const string Delete = "Regs:Patients:Delete";
            public const string View = "Regs:Patients:View";
        }

        public class TblPatDetails
        {
            public const string Insert = "Regs:TblPatDetails:Insert";
            public const string Update = "Regs:TblPatDetails:Update";
            public const string Delete = "Regs:TblPatDetails:Delete";
            public const string View = "Regs:TblPatDetails:View";
        }

        public class TblPatientNextOfKeen
        {
            public const string Insert = "Regs:TblPatientNextOfKeen:Insert";
            public const string Update = "Regs:TblPatientNextOfKeen:Update";
            public const string Delete = "Regs:TblPatientNextOfKeen:Delete";
            public const string View = "Regs:TblPatientNextOfKeen:View";
        }

        public class TblNewBornManagement
        {
            public const string Insert = "Regs:TblNewBornManagement:Insert";
            public const string Update = "Regs:TblNewBornManagement:Update";
            public const string Delete = "Regs:TblNewBornManagement:Delete";
            public const string View = "Regs:TblNewBornManagement:View";
        }

        [DisplayName("Admission")]
        public class TblAdmissionsDischarge
        {
            public const string Insert = "Regs:TblAdmissionsDischarge:Insert";
            public const string Update = "Regs:TblAdmissionsDischarge:Update";
            public const string Delete = "Regs:TblAdmissionsDischarge:Delete";
            public const string View = "Regs:TblAdmissionsDischarge:View";
        }

        [DisplayName("Discharge")]
        public class TblDischarge
        {
            public const string Insert = "Regs:TblDischarge:Insert";
            public const string Update = "Regs:TblDischarge:Update";
            public const string Delete = "Regs:TblDischarge:Delete";
            public const string View = "Regs:TblDischarge:View";
        }

        [DisplayName("Referrals")]
        public class TblReferral
        {
            public const string Insert = "Regs:TblReferral:Insert";
            public const string Update = "Regs:TblReferral:Update";
            public const string Delete = "Regs:TblReferral:Delete";
            public const string View = "Regs:TblReferral:View";
        }


        [DisplayName("Examination details")]
        public class TblTestExaminations
        {
            public const string Insert = "Regs:TblTestExaminations:Insert";
            public const string Update = "Regs:TblTestExaminations:Update";
            public const string Delete = "Regs:TblTestExaminations:Delete";
            public const string View = "Regs:TblTestExaminations:View";
        }

        [DisplayName("Operation details")]
        public class TblOperations
        {
            public const string Insert = "Regs:TblOperations:Insert";
            public const string Update = "Regs:TblOperations:Update";
            public const string Delete = "Regs:TblOperations:Delete";
            public const string View = "Regs:TblOperations:View";
        }
        [Description("[General]")]
        public const string General = "Regs:General";
    }
}