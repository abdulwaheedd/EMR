
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblDiseasesCategory")]
    [BasedOnRow(typeof(Entities.TblDiseasesCategoryRow), CheckNames = true)]
    public class TblDiseasesCategoryForm
    {
        public Int32 Wardid { get; set; }
        public String DiseasesCategory { get; set; }
        public String DiseasesCatDari { get; set; }
        public String DiseasesCatPashto { get; set; }
    }
}