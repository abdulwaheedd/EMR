
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblWardDiseases")]
    [BasedOnRow(typeof(Entities.TblWardDiseasesRow), CheckNames = true)]
    public class TblWardDiseasesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 WId { get; set; }
        public Int32 WardCode { get; set; }
        public String DiseasesCategory { get; set; }
        public Int32 DiseasesCat { get; set; }
        public String DiseasesName { get; set; }
        public String DiseaseDariName { get; set; }
        public String DiseaseName { get; set; }
        public String DiseasesCode { get; set; }
        public String HmirCode { get; set; }
        public Double HmirCodeId { get; set; }
        public Double Status { get; set; }
    }
}