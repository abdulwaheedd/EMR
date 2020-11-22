
namespace EMR.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Locations.Entities;

    [FormScript("Administration.Tenant")]
    [BasedOnRow(typeof(Entities.TenantRow))]
    public class TenantForm
    {
        public String TenantName { get; set; }
        [LookupEditor(typeof(FacilityInfoReferRow))]
        public Int32 FacilityId { get; set; }
    }
}