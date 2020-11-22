
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblProfessions")]
    [BasedOnRow(typeof(Entities.TblProfessionsRow), CheckNames = true)]
    public class TblProfessionsForm
    {
        public String ProName { get; set; }
        public String ProNameD { get; set; }
    }
}