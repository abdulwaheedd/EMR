
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblWardDisease]")]
    [DisplayName("Diseases"), InstanceName("Disease")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Configs.TblWardDisease")]
    public sealed class TblWardDiseaseRow : Row, IIdRow, INameRow
    {

        [DisplayName("W Id"), Column("wID"), PrimaryKey]
        public Int32? WId
        {
            get { return Fields.WId[this]; }
            set { Fields.WId[this] = value; }
        }
        [DisplayName("Ward Code"), Column("WardCode"), NotNull, ForeignKey("[dbo].[TblWard]", "WardId"), LeftJoin("jWd"), LookupInclude]

       public Int32? WardCode
        {
            get { return Fields.WardCode[this]; }
            set { Fields.WardCode[this] = value; }
        }

        [DisplayName("Diagnosis Treatment"), QuickSearch]
        public Int32? DiagnosisTreatment
        {
            get { return Fields.DiagnosisTreatment[this]; }
            set { Fields.DiagnosisTreatment[this] = value; }
        }

        [DisplayName("Diseases Category"), Size(255), NotNull, QuickSearch]
        public String DiseasesCategory
        {
            get { return Fields.DiseasesCategory[this]; }
            set { Fields.DiseasesCategory[this] = value; }
        }

        [DisplayName("Diseases Cat"), Column("Diseases_Cat"), QuickSearch]
        public Int32? DiseasesCat
        {
            get { return Fields.DiseasesCat[this]; }
            set { Fields.DiseasesCat[this] = value; }
        }

        [DisplayName("Diseases Name"), Size(255), NotNull, QuickSearch]
        public String DiseasesName
        {
            get { return Fields.DiseasesName[this]; }
            set { Fields.DiseasesName[this] = value; }
        }

        [DisplayName("Disease Dari Name"), Size(255), QuickSearch]
        public String DiseaseDariName
        {
            get { return Fields.DiseaseDariName[this]; }
            set { Fields.DiseaseDariName[this] = value; }
        }

        [DisplayName("Diseases Code"), Size(255), QuickSearch]
        public String DiseasesCode
        {
            get { return Fields.DiseasesCode[this]; }
            set { Fields.DiseasesCode[this] = value; }
        }

        [DisplayName("Hmir Code"), Column("HMIRCode"), Size(255), QuickSearch]
        public String HmirCode
        {
            get { return Fields.HmirCode[this]; }
            set { Fields.HmirCode[this] = value; }
        }

        [DisplayName("Hmir Code Id"), Column("HMIR_Code_ID")]
        public Double? HmirCodeId
        {
            get { return Fields.HmirCodeId[this]; }
            set { Fields.HmirCodeId[this] = value; }
        }

        [DisplayName("Status"), QuickSearch]
        public Double? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.WId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DiseaseDariName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblWardDiseaseRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field WId;

            public Int32Field WardCode;

            public Int32Field DiagnosisTreatment;

            public StringField DiseasesCategory;

            public Int32Field DiseasesCat;

            public StringField DiseasesName;

            public StringField DiseaseDariName;

            public StringField DiseasesCode;

            public StringField HmirCode;

            public DoubleField HmirCodeId;

            public DoubleField Status;


		}
    }
}
