
namespace EMR.Locations.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Locations"), TableName("[dbo].[TblProvince]")]
    [DisplayName("Provinces"), InstanceName("Provinces")]
    [ReadPermission(PermissionKeys.Provinces.View)]
    [ModifyPermission(PermissionKeys.Provinces.Update)]
    [InsertPermission(PermissionKeys.Provinces.Insert)]
    [DeletePermission(PermissionKeys.Provinces.Delete)]
    [LookupScript("Locations.Provinces")]
    public sealed class ProvincesRow : Row, IIdRow, INameRow
    {

        [DisplayName("Province Id"), PrimaryKey]
        public Int32? ProvinceId
        {
            get { return Fields.ProvinceId[this]; }
            set { Fields.ProvinceId[this] = value; }
        }

        [DisplayName("Province (English)"),NotNull, Size(255), QuickSearch]
        public String ProvinceEng
        {
            get { return Fields.ProvinceEng[this]; }
            set { Fields.ProvinceEng[this] = value; }
        }

        [DisplayName("Province (Dari)"),NotNull, Size(50)]
        public String ProvinceDari
        {
            get { return Fields.ProvinceDari[this]; }
            set { Fields.ProvinceDari[this] = value; }
        }

        [DisplayName("Province Population"),NotNull, Column("Prov_Pop")]
        public Int32? ProvPop
        {
            get { return Fields.ProvPop[this]; }
            set { Fields.ProvPop[this] = value; }
        }

        [DisplayName("Province (Pashto)"),NotNull, Size(50)]
        public String ProvincePashto
        {
            get { return Fields.ProvincePashto[this]; }
            set { Fields.ProvincePashto[this] = value; }
        }
        
        [DisplayName("Province Acronym"),NotNull, Size(5)]
        public String ProvinceAbbrv
        {
            get { return Fields.ProvinceAbbrv[this]; }
            set { Fields.ProvinceAbbrv[this] = value; }
        }

                
        [DisplayName("Province Name"),Expression("t0.[ProvinceEng]+' - '+t0.[ProvinceDari]")]
        public String ProvinceName
        {
            get { return Fields.ProvinceName[this]; }
            set { Fields.ProvinceName[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.ProvinceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProvinceName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProvincesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field ProvinceId;

            public StringField ProvinceEng;

            public StringField ProvinceDari;

            public Int32Field ProvPop;

            public StringField ProvincePashto;
            public StringField ProvinceAbbrv;

            public StringField ProvinceName;
        }
    }
}
