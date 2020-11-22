
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblNbResult")]
    [BasedOnRow(typeof(Entities.TblNbResultRow), CheckNames = true)]
    public class TblNbResultForm
    {
        public String NbResultDari { get; set; }
        public String NbResultPashto { get; set; }
        public String NbResultEn { get; set; }
    }
}