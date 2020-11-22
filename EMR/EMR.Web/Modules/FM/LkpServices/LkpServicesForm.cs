
namespace EMR.FM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.FM.Entities;

    [FormScript("FM.LkpServices")]
    [BasedOnRow(typeof(Entities.LkpServicesRow), CheckNames = true)]
    public class LkpServicesForm
    {
        [LookupEditor(typeof(LkpServiceTypesRow))]
        public Int32 ServiceTypeId { get; set; }
        public String ServiceDari { get; set; }
        public String ServicePashto { get; set; }
        public String ServiceEn { get; set; }
        public Double ServicePrice { get; set; }
        public Boolean Status { get; set; }
    }
}