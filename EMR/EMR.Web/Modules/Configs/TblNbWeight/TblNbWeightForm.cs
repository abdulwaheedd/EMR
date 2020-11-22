
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblNbWeight")]
    [BasedOnRow(typeof(Entities.TblNbWeightRow), CheckNames = true)]
    public class TblNbWeightForm
    {
        public String NbWeightDari { get; set; }
        public String NbWeightPashto { get; set; }
        public String NbWeightEn { get; set; }
    }
}