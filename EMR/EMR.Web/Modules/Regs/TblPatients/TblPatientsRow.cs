
namespace EMR.Regs.Entities
{
    using global::Administration;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Regs"), TableName("[dbo].[TblPatients]")]
    [DisplayName("Patients"), InstanceName("Patient")]
    [ReadPermission(PermissionKeys.TblPatients.View)]
    [ModifyPermission(PermissionKeys.TblPatients.Update)]
    [InsertPermission(PermissionKeys.TblPatients.Insert)]
    [DeletePermission(PermissionKeys.TblPatients.Delete)]
    [LookupScript("Regs.TblPatients")]
    public sealed class TblPatientsRow : Row, IIdRow, INameRow,IMultiTenantRow
    {

        [DisplayName("Mrid"), Column("MRID"),QuickSearch, Identity,NotNull]
        public Int64? Mrid
        {
            get { return Fields.Mrid[this]; }
            set { Fields.Mrid[this] = value; }
        }

        [DisplayName("MRN"),NotNull,QuickSearch]
        public string MRN
        {
            get { return Fields.MRN[this]; }
            set { Fields.MRN[this] = value; }
        }


        [DisplayName("Facility ID"),NotNull,QuickSearch, Column("FacilityID"), ForeignKey("[dbo].[FacilityInfo]", "FacilityID"), LeftJoin("jFacility"), TextualField("FacilityViliCode")]
        public Int32? FacilityId
        {
            get { return Fields.FacilityId[this]; }
            set { Fields.FacilityId[this] = value; }
        }

        [DisplayName("Patient Name"), Size(50),NotNull, QuickSearch]
        public String PatName
        {
            get { return Fields.PatName[this]; }
            set { Fields.PatName[this] = value; }
        }

        [DisplayName("Father Name"),QuickSearch, Size(50)]
        public String PatFatName
        {
            get { return Fields.PatFatName[this]; }
            set { Fields.PatFatName[this] = value; }
        }

        [DisplayName("Mother Name"),QuickSearch, Size(50)]
        public String PatRealationName
        {
            get { return Fields.PatRealationName[this]; }
            set { Fields.PatRealationName[this] = value; }
        }

        [ForeignKey("dbo.TblGender", "GenderId"),LeftJoin("jGender")]
        [DisplayName("Gender"), NotNull]
        public Int16? PatGender
        {
            get { return Fields.PatGender[this]; }
            set { Fields.PatGender[this] = value; }
        }

        [DisplayName("Tazkera"), Size(50),QuickSearch]
        public String PatTazkera
        {
            get { return Fields.PatTazkera[this]; }
            set { Fields.PatTazkera[this] = value; }
        }

        [DisplayName("Husband Name"),QuickSearch, Size(50)]
        public String PatHusbandName
        {
            get { return Fields.PatHusbandName[this]; }
            set { Fields.PatHusbandName[this] = value; }
        }

        [ForeignKey("dbo.TblBloodGroup", "BloodGroupId"), LeftJoin("jBlood")]
        [DisplayName("Bloold Group"),NotNull]
        public Int32? PatBlooldGroup
        {
            get { return Fields.PatBlooldGroup[this]; }
            set { Fields.PatBlooldGroup[this] = value; }
        }

        [DisplayName("User Name"), Size(50)]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName("Last Updated")]
        public DateTime? LastUpdated
        {
            get { return Fields.LastUpdated[this]; }
            set { Fields.LastUpdated[this] = value; }
        }

        [DisplayName("Facility Name"),QuickSearch, Expression("jFacility.[FacilityName]")]
        public String FacilityFacilityName
        {
            get { return Fields.FacilityFacilityName[this]; }
            set { Fields.FacilityFacilityName[this] = value; }
        }

        [DisplayName("Facility Name"), Expression("jFacility.[FacilityNameDari]")]
        public String FacilityFacilityNameDari
        {
            get { return Fields.FacilityFacilityNameDari[this]; }
            set { Fields.FacilityFacilityNameDari[this] = value; }
        }

        [DisplayName("Facility Facility Name Pashto"), Expression("jFacility.[FacilityNamePashto]")]
        public String FacilityFacilityNamePashto
        {
            get { return Fields.FacilityFacilityNamePashto[this]; }
            set { Fields.FacilityFacilityNamePashto[this] = value; }
        }

        [DisplayName("Facility Facility Type"), Expression("jFacility.[FacilityType]")]
        public Int32? FacilityFacilityType
        {
            get { return Fields.FacilityFacilityType[this]; }
            set { Fields.FacilityFacilityType[this] = value; }
        }

        [DisplayName("Gender"),QuickSearch, Expression("jGender.[GenderEng]+ ' - ' +jGender.[GenderDa]+ ' - ' +jGender.[GenderPs]")]
        public String Gender
        {
            get { return Fields.Gender[this]; }
            set { Fields.Gender[this] = value; }
        }
        
        [DisplayName("Blood Group"),QuickSearch, Expression("jBlood.[BloodGroup]")]
        public String BloodGroup
        {
            get { return Fields.BloodGroup[this]; }
            set { Fields.BloodGroup[this] = value; }
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
            get { return Fields.PatName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblPatientsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int64Field Mrid;

            public Int32Field FacilityId;

            public StringField PatName;

            public StringField PatFatName;

            public StringField PatRealationName;

            public Int16Field PatGender;
            public StringField PatHusbandName;

            public StringField PatTazkera;

            public Int32Field PatBlooldGroup;

            public StringField UserName;

            public DateTimeField LastUpdated;

            public Int32Field TenantId;

            public StringField FacilityFacilityName;

            public StringField FacilityFacilityNameDari;

            public StringField FacilityFacilityNamePashto;

            public Int32Field FacilityFacilityType;
            public StringField MRN;

            public StringField Gender;
            public StringField BloodGroup;
        }
    }
}
