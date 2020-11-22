using System;
using System.Collections.Generic;

namespace EMR.Modules.Common.Dashboard
{
    public class DashboardServicePreviewSettings
    {
        public string ServiceURL { get; set; }
        public List<Guid> DashboardServiceInstances { get; set; }
        public DashboardServicePreviewSettings()
        {
            DashboardServiceInstances = new List<Guid>();
        }
    }
}