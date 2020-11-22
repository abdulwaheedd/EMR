
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblNbstatus")]
    [BasedOnRow(typeof(Entities.TblNbstatusRow), CheckNames = true)]
    public class TblNbstatusForm
    {
        public String NbstatusDari { get; set; }
        public String NbstatusPashto { get; set; }
        public String NbstatusEng { get; set; }
    }
}