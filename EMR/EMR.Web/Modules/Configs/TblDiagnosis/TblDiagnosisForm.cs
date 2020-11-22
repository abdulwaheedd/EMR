
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblDiagnosis")]
    [BasedOnRow(typeof(Entities.TblDiagnosisRow), CheckNames = true)]
    public class TblDiagnosisForm
    {
        public String DiagnosisDari { get; set; }
        public String DiagnosisPashto { get; set; }
        public String DiagnosisEn { get; set; }
    }
}