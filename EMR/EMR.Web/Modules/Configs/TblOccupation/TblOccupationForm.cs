
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblOccupation")]
    [BasedOnRow(typeof(Entities.TblOccupationRow), CheckNames = true)]
    public class TblOccupationForm
    {
        public String OccupationEng { get; set; }
        public String OccupationDari { get; set; }
    }
}