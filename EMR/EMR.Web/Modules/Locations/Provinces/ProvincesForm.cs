
namespace EMR.Locations.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Locations.Provinces")]
    [BasedOnRow(typeof(Entities.ProvincesRow), CheckNames = true)]
    public class ProvincesForm
    {
        public String ProvinceEng { get; set; }
        public String ProvinceDari { get; set; }
        public String ProvincePashto { get; set; }
        public Int32 ProvPop { get; set; }
        public String ProvinceAbbrv { get; set; }
    }
}