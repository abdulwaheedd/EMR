
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblWard")]
    [BasedOnRow(typeof(Entities.TblWardRow), CheckNames = true)]
    public class TblWardForm
    {
        public String WardName { get; set; }
        public String WardNameD { get; set; }
        public Int32 WardNumBeds { get; set; }
    }
}