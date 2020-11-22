
namespace EMR.Regs.Entities
{
    using EMR.Locations.Entities;
    using global::Administration;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Regs"), TableName("[dbo].[TblPatDetails]")]
    [DisplayName("Patient Details"), InstanceName("Patient Details")]
    [ReadPermission(PermissionKeys.TblPatDetails.View)]
    [ModifyPermission(PermissionKeys.TblPatDetails.Update)]
    [InsertPermission(PermissionKeys.TblPatDetails.Insert)]
    [DeletePermission(PermissionKeys.TblPatDetails.Delete)]
    public sealed class TblPatDetailsRow : Row, IIdRow, INameRow, IMultiTenantRow
    {

        [DisplayName("Pd Id"), Column("pdID"), PrimaryKey,Identity]
        public Int32? PdId
        {
            get { return Fields.PdId[this]; }
            set { Fields.PdId[this] = value; }
        }

        [DisplayName("MRID"),QuickSearch, Column("MRID"), ForeignKey("[dbo].[TblPatients]", "MRID"), LeftJoin("jMrid"), TextualField("MridPatName")]
        public Int64? Mrid
        {
            get { return Fields.Mrid[this]; }
            set { Fields.Mrid[this] = value; }
        }

        [DisplayName("MRN"),Expression("jMrid.[MRN]"),QuickSearch]
        public String MRN
        {
            get { return Fields.MRN[this]; }
            set { Fields.MRN[this] = value; }
        }
        [DisplayName("Province"),NotNull, ForeignKey("[dbo].[TblProvince]", "ProvinceId"), LeftJoin("jProvince")]
        [LookupEditor(typeof(ProvincesRow))]
        public Int32? ProvinceId
        {
            get { return Fields.ProvinceId[this]; }
            set { Fields.ProvinceId[this] = value; }
        }

        [DisplayName("District"), NotNull]
        public Int32? DistrictId
        {
            get { return Fields.DistrictId[this]; }
            set { Fields.DistrictId[this] = value; }
        }

        [DisplayName("Location"), Size(255), NotNull, QuickSearch]
        public String PatLocation
        {
            get { return Fields.PatLocation[this]; }
            set { Fields.PatLocation[this] = value; }
        }

        [DisplayName("Marital Status"),Column("MariId"),NotNull, ForeignKey("[dbo].[TblMaritalStatus]", "MariId"), LeftJoin("jMari"),LookupInclude]
        public Int32? MariId
        {
            get { return Fields.MariId[this]; }
            set { Fields.MariId[this] = value; }
        }

        [DisplayName("Phone"), Size(20)]
        public String PatPhone
        {
            get { return Fields.PatPhone[this]; }
            set { Fields.PatPhone[this] = value; }
        }

        [DisplayName("Education"), NotNull, Column("EID"), ForeignKey("[dbo].[TblEducation]", "EID"), LeftJoin("jEid"), TextualField("EidEducationDari")]
        public Int32? Eid
        {
            get { return Fields.Eid[this]; }
            set { Fields.Eid[this] = value; }
        }

        [DisplayName("Occupation"), Column("OID"), NotNull, ForeignKey("[dbo].[TblOccupation]", "OID"), LeftJoin("jOid"), TextualField("OidOccupationDari")]
        public Int32? Oid
        {
            get { return Fields.Oid[this]; }
            set { Fields.Oid[this] = value; }
        }

        [DisplayName("Date (Miladi)"), NotNull]
        public DateTime? PatDdate
        {
            get { return Fields.PatDdate[this]; }
            set { Fields.PatDdate[this] = value; }
        }

        [DisplayName("Date (Shamsi)"), NotNull, Size(255)]
        public String PatDdateH
        {
            get { return Fields.PatDdateH[this]; }
            set { Fields.PatDdateH[this] = value; }
        }

        [DisplayName("User Name"), Size(50)]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName("Update Date")]
        public DateTime? LastUpdated
        {
            get { return Fields.LastUpdated[this]; }
            set { Fields.LastUpdated[this] = value; }
        }

        [DisplayName("Facility Id"), Expression("jMrid.[FacilityID]")]
        public Int32? MridFacilityId
        {
            get { return Fields.MridFacilityId[this]; }
            set { Fields.MridFacilityId[this] = value; }
        }

        [DisplayName("Patient Name"), Expression("jMrid.[PatName]")]
        public String MridPatName
        {
            get { return Fields.MridPatName[this]; }
            set { Fields.MridPatName[this] = value; }
        }

        [DisplayName("Mrid Pat Fat Name"), Expression("jMrid.[PatFatName]")]
        public String MridPatFatName
        {
            get { return Fields.MridPatFatName[this]; }
            set { Fields.MridPatFatName[this] = value; }
        }

        [DisplayName("Marital Status"), Expression("jMari.[PatMaritalStatusDari]")]
        public String MariPatMaritalStatusDari
        {
            get { return Fields.MariPatMaritalStatusDari[this]; }
            set { Fields.MariPatMaritalStatusDari[this] = value; }
        }


        [DisplayName("Education"), Expression("jEid.[EducationDari]")]
        public String EidEducationDari
        {
            get { return Fields.EidEducationDari[this]; }
            set { Fields.EidEducationDari[this] = value; }
        }

        [DisplayName("Occupation"), Expression("jOid.[OccupationDari]")]
        public String OidOccupationDari
        {
            get { return Fields.OidOccupationDari[this]; }
            set { Fields.OidOccupationDari[this] = value; }
        }

        [DisplayName("Province "), Expression("jProvince.[ProvinceDari]")]
        public String ProvinceDari
        {
            get { return Fields.ProvinceDari[this]; }
            set { Fields.ProvinceDari[this] = value; }
        }

        [Insertable(false), Updatable(false),DisplayName("Tenant")]
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
            get { return Fields.PdId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PatLocation; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblPatDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field PdId;

            public Int64Field Mrid;

            public Int32Field ProvinceId;

            public Int32Field DistrictId;

            public StringField PatLocation;

            public Int32Field MariId;

            public StringField PatPhone;

            public Int32Field Eid;

            public Int32Field Oid;

            public DateTimeField PatDdate;

            public StringField PatDdateH;

            public StringField UserName;

            public DateTimeField LastUpdated;

            public Int32Field TenantId;



            public Int32Field MridFacilityId;

            public StringField MridPatName;

            public StringField MridPatFatName;

            public StringField MariPatMaritalStatusDari;

            public StringField EidEducationDari;

            public StringField OidOccupationDari;
            public StringField ProvinceDari;
            public StringField MRN;


        }
    }
}
