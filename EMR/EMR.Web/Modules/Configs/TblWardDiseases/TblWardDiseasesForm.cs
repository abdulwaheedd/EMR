
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;

    [FormScript("Configs.TblWardDiseases")]
    [BasedOnRow(typeof(Entities.TblWardDiseasesRow), CheckNames = true)]
    public class TblWardDiseasesForm
    {
        public Int32 WardCode { get; set; }
        public String DiseasesCategory { get; set; }
        public Int32 DiseasesCat { get; set; }
        public String DiseasesName { get; set; }
        public String DiseaseDariName { get; set; }
        [LookupEditor(typeof(TblWrdVarRow))]
        public Int32 WvId { get; set; }
        public String DiseasesCode { get; set; }
        public String HmirCode { get; set; }
        public Double HmirCodeId { get; set; }
        public Double Status { get; set; }

    }
}