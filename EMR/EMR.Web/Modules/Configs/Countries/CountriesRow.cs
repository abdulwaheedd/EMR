
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[Countries]")]
    [DisplayName("Countries"), InstanceName("Countries")]
    [ReadPermission(PermissionKeys.Countries.View)]
    [ModifyPermission(PermissionKeys.Countries.Update)]
    [InsertPermission(PermissionKeys.Countries.Insert)]
    [DeletePermission(PermissionKeys.Countries.Delete)]
    [LookupScript("Configs.Countries")]
    public sealed class CountriesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Country Id"), PrimaryKey]
        public Int32? CountryId
        {
            get { return Fields.CountryId[this]; }
            set { Fields.CountryId[this] = value; }
        }

        [DisplayName("Country"), Size(255), NotNull, QuickSearch]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Region"), Size(255), NotNull]
        public String Region
        {
            get { return Fields.Region[this]; }
            set { Fields.Region[this] = value; }
        }

        [DisplayName("Population")]
        public Double? Population
        {
            get { return Fields.Population[this]; }
            set { Fields.Population[this] = value; }
        }

        [DisplayName("Area")]
        public Double? Area
        {
            get { return Fields.Area[this]; }
            set { Fields.Area[this] = value; }
        }

        [DisplayName("Pop Density")]
        public Double? PopDensity
        {
            get { return Fields.PopDensity[this]; }
            set { Fields.PopDensity[this] = value; }
        }

        [DisplayName("Coastline Ratio")]
        public Double? CoastlineRatio
        {
            get { return Fields.CoastlineRatio[this]; }
            set { Fields.CoastlineRatio[this] = value; }
        }

        [DisplayName("Net Migration")]
        public Double? NetMigration
        {
            get { return Fields.NetMigration[this]; }
            set { Fields.NetMigration[this] = value; }
        }

        [DisplayName("Infant Mortality1000")]
        public Double? InfantMortality1000
        {
            get { return Fields.InfantMortality1000[this]; }
            set { Fields.InfantMortality1000[this] = value; }
        }

        [DisplayName("Gdp"), Column("GDP")]
        public Double? Gdp
        {
            get { return Fields.Gdp[this]; }
            set { Fields.Gdp[this] = value; }
        }

        [DisplayName("Literacy Perc")]
        public Double? LiteracyPerc
        {
            get { return Fields.LiteracyPerc[this]; }
            set { Fields.LiteracyPerc[this] = value; }
        }

        [DisplayName("Phones")]
        public Double? Phones
        {
            get { return Fields.Phones[this]; }
            set { Fields.Phones[this] = value; }
        }

        [DisplayName("Arable")]
        public Double? Arable
        {
            get { return Fields.Arable[this]; }
            set { Fields.Arable[this] = value; }
        }

        [DisplayName("Crops")]
        public Double? Crops
        {
            get { return Fields.Crops[this]; }
            set { Fields.Crops[this] = value; }
        }

        [DisplayName("Other")]
        public Double? Other
        {
            get { return Fields.Other[this]; }
            set { Fields.Other[this] = value; }
        }

        [DisplayName("Climate")]
        public Double? Climate
        {
            get { return Fields.Climate[this]; }
            set { Fields.Climate[this] = value; }
        }

        [DisplayName("Birthrate")]
        public Double? Birthrate
        {
            get { return Fields.Birthrate[this]; }
            set { Fields.Birthrate[this] = value; }
        }

        [DisplayName("Deathrate")]
        public Double? Deathrate
        {
            get { return Fields.Deathrate[this]; }
            set { Fields.Deathrate[this] = value; }
        }

        [DisplayName("Agriculture")]
        public Double? Agriculture
        {
            get { return Fields.Agriculture[this]; }
            set { Fields.Agriculture[this] = value; }
        }

        [DisplayName("Industry")]
        public Double? Industry
        {
            get { return Fields.Industry[this]; }
            set { Fields.Industry[this] = value; }
        }

        [DisplayName("Service")]
        public Double? Service
        {
            get { return Fields.Service[this]; }
            set { Fields.Service[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CountryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Country; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CountriesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CountryId;
            public StringField Country;
            public StringField Region;
            public DoubleField Population;
            public DoubleField Area;
            public DoubleField PopDensity;
            public DoubleField CoastlineRatio;
            public DoubleField NetMigration;
            public DoubleField InfantMortality1000;
            public DoubleField Gdp;
            public DoubleField LiteracyPerc;
            public DoubleField Phones;
            public DoubleField Arable;
            public DoubleField Crops;
            public DoubleField Other;
            public DoubleField Climate;
            public DoubleField Birthrate;
            public DoubleField Deathrate;
            public DoubleField Agriculture;
            public DoubleField Industry;
            public DoubleField Service;
        }
    }
}
