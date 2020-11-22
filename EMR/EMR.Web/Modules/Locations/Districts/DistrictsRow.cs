
namespace EMR.Locations.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [LookupScript("Locations.Districts")]
    [ConnectionKey("Default"), Module("Locations"), TableName("[dbo].[TblDistrict]")]
    [DisplayName("Districts"), InstanceName("Districts")]
    [ReadPermission(PermissionKeys.Districts.View)]
    [ModifyPermission(PermissionKeys.Districts.Update)]
    [InsertPermission(PermissionKeys.Districts.Insert)]
    [DeletePermission(PermissionKeys.Districts.Delete)]
    public sealed class DistrictsRow : Row, IIdRow, INameRow
    {
        [DisplayName("District Id"), Column("DistrictId"),NotNull, PrimaryKey]
        public Int32? DistrictId
        {
            get { return Fields.DistrictId[this]; }
            set { Fields.DistrictId[this] = value; }
        }
        [DisplayName("Province"), Column("ProvinceId"), NotNull, ForeignKey("[dbo].[TblProvince]", "ProvinceId"),LookupInclude, LeftJoin("jProv34")]
        [LookupEditor(typeof(ProvincesRow))]
        public Int32? ProvinceId
        {
            get { return Fields.ProvinceId[this]; }
            set { Fields.ProvinceId[this] = value; }
        }

        [DisplayName("District (English)"), Column("DistrictEng"),NotNull, Size(255), QuickSearch]
        public String DistrictEng
        {
            get { return Fields.DistrictEng[this]; }
            set { Fields.DistrictEng[this] = value; }
        }

        [DisplayName("District (Dari)"),NotNull, Size(50)]
        public String DistrictDari
        {
            get { return Fields.DistrictDari[this]; }
            set { Fields.DistrictDari[this] = value; }
        }

        [DisplayName("District (Pashto)"),NotNull, Size(50)]
        public String DistrictPashto
        {
            get { return Fields.DistrictPashto[this]; }
            set { Fields.DistrictPashto[this] = value; }
        }



        [DisplayName("Province (English)"), Expression("jProv34.[ProvinceEng]")]
        public String ProvinceEng
        {
            get { return Fields.ProvinceEng[this]; }
            set { Fields.ProvinceEng[this] = value; }
        }

        [DisplayName("Province (Dari)"), Expression("jProv34.[ProvinceDari]")]
        public String ProvinceDari
        {
            get { return Fields.ProvinceDari[this]; }
            set { Fields.ProvinceDari[this] = value; }
        }

        [DisplayName("Province (Pashto)"), Expression("jProv34.[ProvincePashto]")]
        public String ProvincePashto
        {
            get { return Fields.ProvincePashto[this]; }
            set { Fields.ProvincePashto[this] = value; }
        }

        [DisplayName("District name"),Expression("t0.[DistrictEng]+' - '+t0.[DistrictDari]") ]
        public String DistrictName
        {
            get { return Fields.DistrictName[this]; }
            set { Fields.DistrictName[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.DistrictId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DistrictName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DistrictsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field ProvinceId;

            public Int32Field DistrictId;

            public StringField DistrictEng;

            public StringField DistrictDari;

            public StringField DistrictPashto;



            public StringField ProvinceEng;

            public StringField ProvinceDari;


            public StringField ProvincePashto;
            public StringField DistrictName;


		}
    }
}
