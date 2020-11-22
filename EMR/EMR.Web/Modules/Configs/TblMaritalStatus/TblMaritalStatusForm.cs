
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblMaritalStatus")]
    [BasedOnRow(typeof(Entities.TblMaritalStatusRow), CheckNames = true)]
    public class TblMaritalStatusForm
    {
        public String PatMaritalStatusEng { get; set; }
        public String PatMaritalStatusDari { get; set; }

    }
}