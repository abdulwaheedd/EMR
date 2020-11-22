
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblEducation")]
    [BasedOnRow(typeof(Entities.TblEducationRow), CheckNames = true)]
    public class TblEducationForm
    {
        public String EducationDari { get; set; }
        public String EducationEng { get; set; }
    }
}