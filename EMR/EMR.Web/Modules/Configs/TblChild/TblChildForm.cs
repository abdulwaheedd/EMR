
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblChild")]
    [BasedOnRow(typeof(Entities.TblChildRow), CheckNames = true)]
    public class TblChildForm
    {
        public String ChildDari { get; set; }
        public String ChildPashto { get; set; }
        public String ChildEn { get; set; }
    }
}