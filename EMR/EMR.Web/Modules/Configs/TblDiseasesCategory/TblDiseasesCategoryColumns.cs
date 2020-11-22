
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.TblDiseasesCategory")]
    [BasedOnRow(typeof(Entities.TblDiseasesCategoryRow), CheckNames = true)]
    public class TblDiseasesCategoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [SortOrder(1, descending: true)]
        public Int32 Id { get; set; }
        public Int32 Wardid { get; set; }
        [EditLink]
        public String DiseasesCategory { get; set; }
        public String DiseasesCatDari { get; set; }
        public String DiseasesCatPashto { get; set; }
    }
}