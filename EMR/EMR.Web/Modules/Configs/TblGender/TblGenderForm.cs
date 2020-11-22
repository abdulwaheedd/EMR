
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblGender")]
    [BasedOnRow(typeof(Entities.TblGenderRow), CheckNames = true)]
    public class TblGenderForm
    {
        public String GenderEng { get; set; }
        public String GenderDa { get; set; }
        public String GenderPs { get; set; }
    }
}