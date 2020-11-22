
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblBloodGroup")]
    [BasedOnRow(typeof(Entities.TblBloodGroupRow), CheckNames = true)]
    public class TblBloodGroupForm
    {
        public String BloodGroup { get; set; }
    }
}