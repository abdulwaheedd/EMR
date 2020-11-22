using Serenity.Extensibility;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EMR.Dashboard
{
    [NestedPermissionKeys]
    public class PermissionKeys
    {
        public class Dashboard
        {
            public const string View = "Dashboard:Main:View";
        }
        public class Main
        {
            public const string View = "Dashboard:DashboardIndex:View";
        }

        public class Annual
        {
            public const string View = "Dashboard:Annual:View";
        }
        public class AnnualFrame
        {
            public const string View = "Dashboard:AnnualFrame:View";
        }

        public class Inpatients
        {
            public const string View = "Dashboard:Inpatients:View";
        }

        public class AllDashboards
        {
            public const string View = "Dashboard:AllDashboards:View";
        }
        public class Abortions
        {
            public const string View = "Dashboard:Abortions:View";
        }
        public class AgeGroup
        {
            public const string View = "Dashboard:AgeGroup:View";
        }
        public class Top10Disease
        {
            public const string View = "Dashboard:Top10Disease:View";
        }
        public class UserFee
        {
            public const string View = "Dashboard:UserFee:View";
        }
        public class Admissions
        {
            public const string View = "Dashboard:Admissions:View";
        }
    }
}