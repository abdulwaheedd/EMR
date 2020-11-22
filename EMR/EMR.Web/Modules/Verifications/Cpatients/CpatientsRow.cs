
namespace EMR.Verifications.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Verifications"), TableName("[dbo].[Cpatients]")]
    [DisplayName("Patients"), InstanceName("Patient")]
    [ReadPermission(PermissionKeys.Cpatients.View)]
    public sealed class CpatientsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Mrid"), Column("MRID"), Identity]
        public Int64? Mrid
        {
            get { return Fields.Mrid[this]; }
            set { Fields.Mrid[this] = value; }
        }

        [DisplayName("MRN"), Column("MRN"), Size(100), NotNull, QuickSearch]
        public String Mrn
        {
            get { return Fields.Mrn[this]; }
            set { Fields.Mrn[this] = value; }
        }

        [DisplayName("First Name"), Size(50), NotNull]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName("Last Name"), Size(50)]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [DisplayName("Father Name"), Size(50)]
        public String FatherName
        {
            get { return Fields.FatherName[this]; }
            set { Fields.FatherName[this] = value; }
        }

        [DisplayName("Gender"), NotNull, Column("GenderId"), ForeignKey("[dbo].[TblGender]", "GenderId"), LeftJoin("jGender")]
        public Int32? GenderId
        {
            get { return Fields.GenderId[this]; }
            set { Fields.GenderId[this] = value; }
        }

        [DisplayName("Date Of Birth")]
        public DateTime? DateOfBirth
        {
            get { return Fields.DateOfBirth[this]; }
            set { Fields.DateOfBirth[this] = value; }
        }

        [DisplayName("Age In Year")]
        public Int32? AgeInYear
        {
            get { return Fields.AgeInYear[this]; }
            set { Fields.AgeInYear[this] = value; }
        }

        [DisplayName("Ethnicity"), NotNull, Column("EthnicityId"), ForeignKey("[dbo].[LkpEthnicity]", "EthnicityId"), LeftJoin("jEthnicity")]
        public Int32? EthnicityId
        {
            get { return Fields.EthnicityId[this]; }
            set { Fields.EthnicityId[this] = value; }
        }


        [DisplayName("Ethnicity"), Expression("jEthnicity.[EthnicityName]"), QuickSearch]
        public String EthnicityName
        {
            get { return Fields.EthnicityName[this]; }
            set { Fields.EthnicityName[this] = value; }
        }


        [DisplayName("Gender"), Expression("jGender.[GenderEng]"), QuickSearch]
        public String GenderName
        {
            get { return Fields.GenderName[this]; }
            set { Fields.GenderName[this] = value; }
        }

        [DisplayName("Grand Father"), QuickSearch]
        public String GrandFather
        {
            get { return Fields.GrandFather[this]; }
            set { Fields.GrandFather[this] = value; }
        }
        [DisplayName("Shamsi Date"), QuickSearch]
        public String SDateOfBirth
        {
            get { return Fields.SDateOfBirth[this]; }
            set { Fields.SDateOfBirth[this] = value; }
        }
        [DisplayName("Send To"), NotNull]
        public Int32? RefertoDoctor
        {
            get { return Fields.RefertoDoctor[this]; }
            set { Fields.RefertoDoctor[this] = value; }
        }

        [DisplayName("Province"), Column("ProvinceId"), NotNull, ForeignKey("[dbo].[TblProvince]", "ProvinceId"), LeftJoin("jProv")]

        public Int32? ProvinceId
        {
            get { return Fields.ProvinceId[this]; }
            set { Fields.ProvinceId[this] = value; }
        }

        [DisplayName("District"), Column("DistrictId"), NotNull, ForeignKey("[dbo].[TblDistrict]", "DistrictId"), LeftJoin("jDist")]

        public Int32? DistrictId
        {
            get { return Fields.DistrictId[this]; }
            set { Fields.DistrictId[this] = value; }
        }

        [DisplayName("Province"), QuickSearch, Expression("jProv.[ProvinceDari]")]
        public String ProvinceName
        {
            get { return Fields.ProvinceName[this]; }
            set { Fields.ProvinceName[this] = value; }
        }
        [DisplayName("District"), QuickSearch, Expression("jDist.[DistrictDari]")]
        public String DistrictName
        {
            get { return Fields.DistrictName[this]; }
            set { Fields.DistrictName[this] = value; }
        }

        [DisplayName("Location"), Size(200)]
        public String Location
        {
            get { return Fields.Location[this]; }
            set { Fields.Location[this] = value; }
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

        public CpatientsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Mrid;
            public StringField Mrn;
            public StringField FirstName;
            public StringField LastName;
            public StringField FatherName;
            public Int32Field GenderId;
            public DateTimeField DateOfBirth;
            public StringField SDateOfBirth;
            public Int32Field AgeInYear;
            public StringField GrandFather;
            public Int32Field ProvinceId;
            public Int32Field DistrictId;
            public StringField Location;

            public Int32Field EthnicityId;
            public Int32Field RefertoDoctor;

            public StringField EthnicityName;
            public StringField GenderName;

            public StringField ProvinceName;
            public StringField DistrictName;
        }
    }
}
