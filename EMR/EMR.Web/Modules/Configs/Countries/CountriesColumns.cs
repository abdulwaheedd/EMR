
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.Countries")]
    [BasedOnRow(typeof(Entities.CountriesRow), CheckNames = true)]
    public class CountriesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CountryId { get; set; }
        [EditLink]
        public String Country { get; set; }
        public String Region { get; set; }
        public Double Population { get; set; }
        public Double Area { get; set; }
        public Double PopDensity { get; set; }
        public Double CoastlineRatio { get; set; }
        public Double NetMigration { get; set; }
        public Double InfantMortality1000 { get; set; }
        public Double Gdp { get; set; }
        public Double LiteracyPerc { get; set; }
        public Double Phones { get; set; }
        public Double Arable { get; set; }
        public Double Crops { get; set; }
        public Double Other { get; set; }
        public Double Climate { get; set; }
        public Double Birthrate { get; set; }
        public Double Deathrate { get; set; }
        public Double Agriculture { get; set; }
        public Double Industry { get; set; }
        public Double Service { get; set; }
    }
}