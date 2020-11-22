
namespace EMR.Locations.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Locations.FacilityTypes")]
    [BasedOnRow(typeof(Entities.FacilityTypesRow), CheckNames = true)]
    public class FacilityTypesForm
    {
        public Int32 FacTypeCode { get; set; }
        public String FacType { get; set; }
        public String FacTypeDari { get; set; }
        public String FacTypePashto { get; set; }
    }
}