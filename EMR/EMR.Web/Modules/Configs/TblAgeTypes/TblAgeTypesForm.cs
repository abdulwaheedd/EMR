
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblAgeTypes")]
    [BasedOnRow(typeof(Entities.TblAgeTypesRow), CheckNames = true)]
    public class TblAgeTypesForm
    {
        public String AgeTypeNameEn { get; set; }
        public String AgeTypeNameDari { get; set; }
        public String AgeTypeNamePashto { get; set; }
    }
}