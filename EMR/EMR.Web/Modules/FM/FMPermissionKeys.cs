using Serenity.Extensibility;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EMR.FM
{
    [NestedPermissionKeys]
    public class PermissionKeys
    {
        public class UserFeePatients
        {
            public const string Insert = "FM:UserFeePatients:Insert";
            public const string Update = "FM:UserFeePatients:Update";
            public const string Delete = "FM:UserFeePatients:Delete";
            public const string View = "FM:UserFeePatients:View";
        }

        public class TblFeePayment
        {
            public const string Insert = "FM:TblFeePayment:Insert";
            public const string Update = "FM:TblFeePayment:Update";
            public const string Delete = "FM:TblFeePayment:Delete";
            public const string View = "FM:TblFeePayment:View";
        }

        public class LkpServiceTypes
        {
            public const string Insert = "FM:LkpServiceTypes:Insert";
            public const string Update = "FM:LkpServiceTypes:Update";
            public const string Delete = "FM:LkpServiceTypes:Delete";
            public const string View = "FM:LkpServiceTypes:View";
        }

        public class LkpServices
        {
            public const string Insert = "FM:LkpServices:Insert";
            public const string Update = "FM:LkpServices:Update";
            public const string Delete = "FM:LkpServices:Delete";
            public const string View = "FM:LkpServices:View";
        }

        public class TblPrintDetails
        {
            public const string Insert = "FM:TblPrintDetails:Insert";
            public const string Update = "FM:TblPrintDetails:Update";
            public const string Delete = "FM:TblPrintDetails:Delete";
            public const string View = "FM:TblPrintDetails:View";
        }
        [Description("[General]")]
        public const string General = "Regs:General";
    }
}