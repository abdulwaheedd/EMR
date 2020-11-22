
namespace EMR.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.DashboardUrl")]
    [BasedOnRow(typeof(Entities.DashboardUrlRow), CheckNames = true)]
    public class DashboardUrlForm
    {
        public String Url { get; set; }
        public Boolean Active { get; set; }
    }
}