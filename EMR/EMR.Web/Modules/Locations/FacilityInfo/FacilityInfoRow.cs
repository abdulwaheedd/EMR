
namespace EMR.Locations.Entities
{
    using global::Administration;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Locations"), TableName("[dbo].[FacilityInfo]")]
    [DisplayName("Health Facilities"), InstanceName("Facility")]
    [ReadPermission(PermissionKeys.FacilityInfo.View)]
    [ModifyPermission(PermissionKeys.FacilityInfo.Update)]
    [InsertPermission(PermissionKeys.FacilityInfo.Insert)]
    [DeletePermission(PermissionKeys.FacilityInfo.Delete)]
    [LookupScript("Locations.FacilityInfo", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class FacilityInfoRow : Row, IIdRow, INameRow,IMultiTenantRow
    {

        [DisplayName("Facility ID"), Column("FacilityID"),NotNull, PrimaryKey,QuickSearch]
        public Int32? FacilityId
        {
            get { return Fields.FacilityId[this]; }
            set { Fields.FacilityId[this] = value; }
        }

        [DisplayName("District"), NotNull, ForeignKey("[dbo].[TblDistrict]", "DistrictId"), LeftJoin("jDistCode"), TextualField("DistCodeDist398Name")]
        public Int32? DistrictId
        {
            get { return Fields.DistrictId[this]; }
            set { Fields.DistrictId[this] = value; }
        }


        [DisplayName("Facility Name (English)"), Size(255), NotNull,QuickSearch]
        public String FacilityName
        {
            get { return Fields.FacilityName[this]; }
            set { Fields.FacilityName[this] = value; }
        }

        [DisplayName("Facility Name (Dari)"), Size(255),NotNull, QuickSearch]
        public String FacilityNameDari
        {
            get { return Fields.FacilityNameDari[this]; }
            set { Fields.FacilityNameDari[this] = value; }
        }

        [DisplayName("Facility Name (Pashto)"), Size(255),NotNull, QuickSearch]
        public String FacilityNamePashto
        {
            get { return Fields.FacilityNamePashto[this]; }
            set { Fields.FacilityNamePashto[this] = value; }
        }

        [DisplayName("Facility Type"),NotNull,QuickSearch, ForeignKey("[dbo].[FacilityTypes]", "FacTypeCode"), LeftJoin("jFacilityType"), TextualField("FacilityTypeFacType")]
        public Int32? FacilityType
        {
            get { return Fields.FacilityType[this]; }
            set { Fields.FacilityType[this] = value; }
        }
        [DisplayName("Village Code"), Size(255), QuickSearch]
        public String ViliCode
        {
            get { return Fields.ViliCode[this]; }
            set { Fields.ViliCode[this] = value; }
        }

        [DisplayName("Grant #"), Column("GrantID"), Size(255), QuickSearch]
        public String GrantId
        {
            get { return Fields.GrantId[this]; }
            set { Fields.GrantId[this] = value; }
        }

        [DisplayName("LAT"), Column("LAT")]
        public Double? Lat
        {
            get { return Fields.Lat[this]; }
            set { Fields.Lat[this] = value; }
        }

        [DisplayName("LON"), Column("LON")]
        public Double? Lon
        {
            get { return Fields.Lon[this]; }
            set { Fields.Lon[this] = value; }
        }

        [DisplayName("Gps Lattitude"), Column("GPSLattitude")]
        public Double? GpsLattitude
        {
            get { return Fields.GpsLattitude[this]; }
            set { Fields.GpsLattitude[this] = value; }
        }

        [DisplayName("Gps Longtitude"), Column("GPSLongtitude")]
        public Double? GpsLongtitude
        {
            get { return Fields.GpsLongtitude[this]; }
            set { Fields.GpsLongtitude[this] = value; }
        }

        [DisplayName("Implementer"), Size(255), QuickSearch]
        public String Implementer
        {
            get { return Fields.Implementer[this]; }
            set { Fields.Implementer[this] = value; }
        }


        [DisplayName("Province"), Expression("jDistCode.[ProvinceId]"), ForeignKey("TblProvince", "ProvinceId"), LeftJoin("r"), LookupInclude, QuickSearch]

        public Int32? DistProvinceId
        {
            get { return Fields.DistProvinceId[this]; }
            set { Fields.DistProvinceId[this] = value; }
        }

        [DisplayName("District (English)"),QuickSearch, Expression("jDistCode.[DistrictEng]")]
        public String DistrictEng
        {
            get { return Fields.DistrictEng[this]; }
            set { Fields.DistrictEng[this] = value; }
        }

        [DisplayName("District (Dari)"), Expression("jDistCode.[DistrictDari]")]
        public String DistrictDari
        {
            get { return Fields.DistrictDari[this]; }
            set { Fields.DistrictDari[this] = value; }
        }

        [DisplayName("District (Pashto)"), Expression("jDistCode.[DistrictPashto]")]
        public String DistrictPashto
        {
            get { return Fields.DistrictPashto[this]; }
            set { Fields.DistrictPashto[this] = value; }
        }

        [DisplayName("Facility Type"), Expression("jFacilityType.[FacType]")]
        public String FacilityTypeFacType
        {
            get { return Fields.FacilityTypeFacType[this]; }
            set { Fields.FacilityTypeFacType[this] = value; }
        }

        [DisplayName("Facility Info"), Expression("CONVERT(nvarchar,t0.[FacilityId]) +'--'+t0.[FacilityName] +'-'+t0.[FacilityNameDari]+'-'+t0.[FacilityNamePashto]")]
        public String FacilityFullName
        {
            get { return Fields.FacilityFullName[this]; }
            set { Fields.FacilityFullName[this] = value; }
        }

        [DisplayName("Facility Type"), Expression("jFacilityType.[FacTypeDari]")]
        public String FacilityTypeFacTypeDari
        {
            get { return Fields.FacilityTypeFacTypeDari[this]; }
            set { Fields.FacilityTypeFacTypeDari[this] = value; }
        }

        [DisplayName("Facility Type Fac Type Pashto"), Expression("jFacilityType.[FacTypePashto]")]
        public String FacilityTypeFacTypePashto
        {
            get { return Fields.FacilityTypeFacTypePashto[this]; }
            set { Fields.FacilityTypeFacTypePashto[this] = value; }
        }
        
        [DisplayName("Province Acronym"), Expression("r.[ProvinceAbbrv]")]
        public String ProvinAbbrv
        {
            get { return Fields.ProvinAbbrv[this]; }
            set { Fields.ProvinAbbrv[this] = value; }
        }
                
        [DisplayName("No of patients")]
        public Int32? NoOfPatients
        {
            get { return Fields.NoOfPatients[this]; }
            set { Fields.NoOfPatients[this] = value; }
        }

        [Insertable(true), Updatable(true), DisplayName("Tenant")]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.FacilityId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FacilityFullName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FacilityInfoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field FacilityId;

            public Int32Field DistrictId;

            public StringField ViliCode;

            public StringField FacilityName;

            public StringField FacilityNameDari;

            public StringField FacilityNamePashto;

            public Int32Field FacilityType;

            public StringField GrantId;

            public DoubleField Lat;

            public DoubleField Lon;

            public DoubleField GpsLattitude;

            public DoubleField GpsLongtitude;

            public StringField Implementer;
            public StringField FacilityFullName;



            public Int32Field DistProvinceId;

            public StringField DistrictEng;

            public StringField DistrictDari;

            public StringField DistrictPashto;



            public StringField FacilityTypeFacType;

            public StringField FacilityTypeFacTypeDari;

            public StringField FacilityTypeFacTypePashto;
            public StringField ProvinAbbrv;

            public Int32Field NoOfPatients;
            public Int32Field TenantId;
        }
    }
}
