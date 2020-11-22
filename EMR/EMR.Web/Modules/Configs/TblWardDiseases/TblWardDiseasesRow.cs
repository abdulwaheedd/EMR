
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblWardDiseases]")]
    [DisplayName("Diseases"), InstanceName("Disease")]
    [ReadPermission(PermissionKeys.TblWardDiseases.View)]
    [ModifyPermission(PermissionKeys.TblWardDiseases.Update)]
    [InsertPermission(PermissionKeys.TblWardDiseases.Insert)]
    [DeletePermission(PermissionKeys.TblWardDiseases.Delete)]
    [LookupScript("Configs.TblWardDiseases")]
    public sealed class TblWardDiseasesRow : Row, IIdRow, INameRow
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
        [DisplayName("Disease Category")]
        public String DiseasesCategory
        {
            get { return Fields.DiseasesCategory[this]; }
            set { Fields.DiseasesCategory[this] = value; }
        }

        [Column("WvId"), ForeignKey("[dbo].[TblWrdVar]", "WVID"), LeftJoin("jWds"), LookupInclude]

        [DisplayName("Include in operation"), QuickSearch]
        public Int32? WvId
        {
            get { return Fields.WvId[this]; }
            set { Fields.WvId[this] = value; }
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

        [DisplayName("Disease Dari Name"),SortOrder(1), Size(255), QuickSearch]
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
        
        //[DisplayName("Disease"), QuickSearch,Expression("t0.[DiseasesName]+' - '+t0.[DiseaseDariName]")]

        [DisplayName("Disease"), QuickSearch,Expression("iif(t0.DiseaseDariName is null,t0.Diseasesname,concat(T0.DiseasesName,'-',T0.DiseaseDariName))")]
        public String DiseaseName
        {
            get { return Fields.DiseaseName[this]; }
            set { Fields.DiseaseName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.WId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DiseaseName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblWardDiseasesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field WId;

            public Int32Field WardCode;

            public StringField DiseasesCategory;

            public Int32Field DiseasesCat;

            public StringField DiseasesName;

            public StringField DiseaseDariName;

            public StringField DiseasesCode;

            public StringField HmirCode;

            public DoubleField HmirCodeId;

            public DoubleField Status;
            public Int32Field WvId;

            public StringField DiseaseName;
		}
    }
}
