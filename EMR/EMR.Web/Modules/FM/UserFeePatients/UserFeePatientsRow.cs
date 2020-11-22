
namespace EMR.FM.Entities
{
    using global::Administration;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("FM"), TableName("[dbo].[UserFeePatients]")]
    [DisplayName("Patient Details"), InstanceName("Patient Detail")]
    [ReadPermission(PermissionKeys.UserFeePatients.View)]
    [ModifyPermission(PermissionKeys.UserFeePatients.Update)]
    [InsertPermission(PermissionKeys.UserFeePatients.Insert)]
    [DeletePermission(PermissionKeys.UserFeePatients.Delete)]
    public sealed class UserFeePatientsRow : Row, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("MRID"), Column("MRID"), Identity]
        public Int64? Mrid
        {
            get { return Fields.Mrid[this]; }
            set { Fields.Mrid[this] = value; }
        }

        [DisplayName("MRN"), Column("MRN"), Size(50), QuickSearch]
        public String Mrn
        {
            get { return Fields.Mrn[this]; }
            set { Fields.Mrn[this] = value; }
        }
        [DisplayName("Facility ID"), NotNull, QuickSearch, Column("FacilityID"), ForeignKey("[dbo].[FacilityInfo]", "FacilityID"), LeftJoin("jFacility")]
        public Int32? FacilityId
        {
            get { return Fields.FacilityId[this]; }
            set { Fields.FacilityId[this] = value; }
        }

        [DisplayName("Patient Name"),NotNull, Size(50)]
        public String PatName
        {
            get { return Fields.PatName[this]; }
            set { Fields.PatName[this] = value; }
        }

        [DisplayName("Father Name"),NotNull, Size(50)]
        public String PatFatName
        {
            get { return Fields.PatFatName[this]; }
            set { Fields.PatFatName[this] = value; }
        }

        [DisplayName("Realation Name"), Size(50)]
        public String PatRealationName
        {
            get { return Fields.PatRealationName[this]; }
            set { Fields.PatRealationName[this] = value; }
        }

        [DisplayName("Husband Name"), Size(50)]
        public String PatHusbandName
        {
            get { return Fields.PatHusbandName[this]; }
            set { Fields.PatHusbandName[this] = value; }
        }

        [ForeignKey("dbo.TblGender", "GenderId"),NotNull, LeftJoin("jGender")]
        [DisplayName("Gender")]
        public Int16? PatGender
        {
            get { return Fields.PatGender[this]; }
            set { Fields.PatGender[this] = value; }
        }

        [DisplayName("User Name"), Size(50)]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName("Updated")]
        public DateTime? LastUpdated
        {
            get { return Fields.LastUpdated[this]; }
            set { Fields.LastUpdated[this] = value; }
        }

        [DisplayName("Gender"), QuickSearch, Expression("jGender.[GenderEng]+ ' - ' +jGender.[GenderDa]+ ' - ' +jGender.[GenderPs]")]
        public String Gender
        {
            get { return Fields.Gender[this]; }
            set { Fields.Gender[this] = value; }
        }

        [DisplayName("Facility Name"), Expression("jFacility.[FacilityNameDari]")]
        public String FacilityFacilityNameDari
        {
            get { return Fields.FacilityFacilityNameDari[this]; }
            set { Fields.FacilityFacilityNameDari[this] = value; }
        }

        [Insertable(false), Updatable(false)]
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
            get { return Fields.Mrid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Mrn; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserFeePatientsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Mrid;
            public StringField Mrn;
            public Int32Field FacilityId;
            public StringField PatName;
            public StringField PatFatName;
            public StringField PatRealationName;
            public StringField PatHusbandName;
            public Int16Field PatGender;
            public StringField UserName;
            public DateTimeField LastUpdated;
            public Int32Field TenantId;

            public StringField Gender;
            public StringField FacilityFacilityNameDari;
        }
    }
}
