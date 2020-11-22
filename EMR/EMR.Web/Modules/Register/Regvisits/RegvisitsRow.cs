
namespace EMR.Register.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Register"), TableName("[dbo].[Regvisits]")]
    [DisplayName("Visits"), InstanceName("Visit")]
    [ReadPermission(PermissionKeys.Regvisits.View)]
    [ModifyPermission(PermissionKeys.Regvisits.Update)]
    [InsertPermission(PermissionKeys.Regvisits.Insert)]
    [DeletePermission(PermissionKeys.Regvisits.Delete)]
    public sealed class RegvisitsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Visit Id"), Identity]
        public Int64? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
        }

        [DisplayName("MRID"), Column("MRID"), ForeignKey("[dbo].[Outpatients]", "MRID"), LeftJoin("jMrid")]
        public Int64? Mrid
        {
            get { return Fields.Mrid[this]; }
            set { Fields.Mrid[this] = value; }
        }

        [DisplayName("Occupation"), Column("OccupationId"), NotNull, ForeignKey("[dbo].[TblOccupation]", "OID"), LeftJoin("jOcp")]
        public Int32? OccupationId
        {
            get { return Fields.OccupationId[this]; }
            set { Fields.OccupationId[this] = value; }
        }

        [DisplayName("Marital Status"), Column("MaritalStatusId"), NotNull, ForeignKey("[dbo].[TblMaritalStatus]", "MariId"), LeftJoin("jMari")]
        public Int32? MaritalStatusId
        {
            get { return Fields.MaritalStatusId[this]; }
            set { Fields.MaritalStatusId[this] = value; }
        }

        [DisplayName("Date Of Visit"), NotNull]
        public DateTime? DateOfVisit
        {
            get { return Fields.DateOfVisit[this]; }
            set { Fields.DateOfVisit[this] = value; }
        }

        [DisplayName("Phone Number"), Size(50), QuickSearch]
        public String PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
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

        [DisplayName("Location"), Size(200)]
        public String Location
        {
            get { return Fields.Location[this]; }
            set { Fields.Location[this] = value; }
        }

        [DisplayName("User Id")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Updated")]
        public DateTime? Updated
        {
            get { return Fields.Updated[this]; }
            set { Fields.Updated[this] = value; }
        }

        [DisplayName("Occupation"), QuickSearch, Expression("jOcp.[OccupationDari]")]
        public String OccupationName
        {
            get { return Fields.OccupationName[this]; }
            set { Fields.OccupationName[this] = value; }
        }
        [DisplayName("Maritial Status"), QuickSearch, Expression("jMari.[PatMaritalStatusDari]")]
        public String MaritalStatusName
        {
            get { return Fields.MaritalStatusName[this]; }
            set { Fields.MaritalStatusName[this] = value; }
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

        [DisplayName("MRN"), Expression("jMrid.[MRN]"), QuickSearch]
        public String MRN
        {
            get { return Fields.MRN[this]; }
            set { Fields.MRN[this] = value; }
        }
        [DisplayName("Type of visit"), NotNull, Column("TypeofvisitId"), ForeignKey("[dbo].[LkpTypeofvisit]", "Id"), LeftJoin("jtypeofvisit")]
        public Int32? TypeofvisitId
        {
            get { return Fields.TypeofvisitId[this]; }
            set { Fields.TypeofvisitId[this] = value; }
        }


        [DisplayName("Type of visit"), Expression("jtypeofvisit.[TypeOfVisit]"), QuickSearch]
        public String Typeofvisit
        {
            get { return Fields.Typeofvisit[this]; }
            set { Fields.Typeofvisit[this] = value; }
        }

        [DisplayName("Shamsi Date"),QuickSearch]
        public String SDateOfVisit
        {
            get { return Fields.SDateOfVisit[this]; }
            set { Fields.SDateOfVisit[this] = value; }
        }

        [DisplayName("Stay Duration (Year)"),NotNull, QuickSearch]
        public Int32? DurationOfStay
        {
            get { return Fields.DurationOfStay[this]; }
            set { Fields.DurationOfStay[this] = value; }
        }
        [DisplayName("Cycle")]
        public Int32? CycleId
        {
            get { return Fields.CycleId[this]; }
            set { Fields.CycleId[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.VisitId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PhoneNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RegvisitsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field VisitId;
            public Int64Field Mrid;
            public Int32Field OccupationId;
            public Int32Field MaritalStatusId;
            public DateTimeField DateOfVisit;
            public StringField SDateOfVisit;
            public StringField PhoneNumber;
            public Int32Field ProvinceId;
            public Int32Field DistrictId;
            public StringField Location;
            public Int32Field UserId;
            public DateTimeField Updated;
            public Int32Field TypeofvisitId;
            public Int32Field DurationOfStay;

            public StringField OccupationName;
            public StringField MaritalStatusName;
            public StringField ProvinceName;
            public StringField DistrictName;

            public StringField MRN;
            public StringField Typeofvisit;
            public Int32Field CycleId;
        }
    }
}
