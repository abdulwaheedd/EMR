
namespace EMR.Regs.Entities
{
    using EMR.Common;
    using global::Administration;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Regs"), TableName("[dbo].[TblAdmissionsDischarge]")]
    [DisplayName("Admissions/Discharge"), InstanceName("Admission/Discharge")]
    [ReadPermission(PermissionKeys.TblAdmissionsDischarge.View)]
    [ModifyPermission(PermissionKeys.TblAdmissionsDischarge.Update)]
    [InsertPermission(PermissionKeys.TblAdmissionsDischarge.Insert)]
    [DeletePermission(PermissionKeys.TblAdmissionsDischarge.Delete)]
    public sealed class TblAdmissionsDischargeRow : Row, IIdRow, INameRow,IMultiTenantRow
    {

        [DisplayName("Ad Id"), Column("adID"), Identity]
        public Int64? AdId
        {
            get { return Fields.AdId[this]; }
            set { Fields.AdId[this] = value; }
        }

        [DisplayName("MRID"), Column("MRID"), ForeignKey("[dbo].[TblPatients]", "MRID"), LeftJoin("jMrid"), TextualField("MridPatName")]
        public Int64? Mrid
        {
            get { return Fields.Mrid[this]; }
            set { Fields.Mrid[this] = value; }
        }

        [DisplayName("MRN"), Expression("jMrid.[MRN]"),QuickSearch]
        public String MRN
        {
            get { return Fields.MRN[this]; }
            set { Fields.MRN[this] = value; }
        }

        [DisplayName("Ward"),NotNull, Column("WARDID"), ForeignKey("[dbo].[TblWard]", "WardID"), LeftJoin("jWardid"), TextualField("WardidWardName")]
        public Int32? Wardid
        {
            get { return Fields.Wardid[this]; }
            set { Fields.Wardid[this] = value; }
        }

        [DisplayName("Initial diagnosis"),NotNull]
        public Int32? AdDiagnosis
        {
            get { return Fields.AdDiagnosis[this]; }
            set { Fields.AdDiagnosis[this] = value; }
        }

        [DisplayName("Diag. date(m)"),NotNull,QuickSearch]
        public DateTime? AdDate
        {
            get { return Fields.AdDate[this]; }
            set { Fields.AdDate[this] = value; }
        }

        [ShamsiDatePickerEditor]
        [DisplayName("Diag. date(s)"),NotNull, Size(15), QuickSearch]
        public String AdDateH
        {
            get { return Fields.AdDateH[this]; }
            set { Fields.AdDateH[this] = value; }
        }

        [DisplayName("Age"),NotNull,QuickSearch]
        public Int32? AdAge
        {
            get { return Fields.AdAge[this]; }
            set { Fields.AdAge[this] = value; }
        }

        [Column("AdAgeType"), ForeignKey("[dbo].[TblAgeTypes]", "AgetypeId"), LeftJoin("jAgeType")]
        [DisplayName("Age type"),NotNull, Size(15)]
        public Int32? AdAgeType
        {
            get { return Fields.AdAgeType[this]; }
            set { Fields.AdAgeType[this] = value; }
        }

        [DisplayName("Age type"), Expression("jAgeType.[AgeTypeNameDari]"),QuickSearch]
        public String AdAgeTypeName
        {
            get { return Fields.AdAgeTypeName[this]; }
            set { Fields.AdAgeTypeName[this] = value; }
        }

        [Column("AdCaseType"),NotNull, ForeignKey("[dbo].[TblCaseTypes]", "CaseId"), LeftJoin("jCaseType")]

        [DisplayName("Case type")]
        public Int32? AdCaseType
        {
            get { return Fields.AdCaseType[this]; }
            set { Fields.AdCaseType[this] = value; }
        }

        [DisplayName("Case type"), Expression("jCaseType.[CasetypeDari]"),QuickSearch]
        public String AdCaseTypeName
        {
            get { return Fields.AdCaseTypeName[this]; }
            set { Fields.AdCaseTypeName[this] = value; }
        }

        [DisplayName("Reason for death")]
        public Int32? DisDiagCausDeath
        {
            get { return Fields.DisDiagCausDeath[this]; }
            set { Fields.DisDiagCausDeath[this] = value; }
        }

        [ShamsiDatePickerEditor]
        [DisplayName("Result date(s)"),NotNull, Size(15),QuickSearch]
        public String DisDateH
        {
            get { return Fields.DisDateH[this]; }
            set { Fields.DisDateH[this] = value; }
        }

        [DisplayName("Result date(m)"),NotNull,QuickSearch]
        public DateTime? DisDate
        {
            get { return Fields.DisDate[this]; }
            set { Fields.DisDate[this] = value; }
        }

        [DisplayName("Patient Status"), Size(255)]
        public Int32? DisStatus
        {
            get { return Fields.DisStatus[this]; }
            set { Fields.DisStatus[this] = value; }
        }

        [DisplayName("User Name"), Size(255)]
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

        [DisplayName("Final result"),NotNull]
        public Int32? DisDiagResult
        {
            get { return Fields.DisDiagResult[this]; }
            set { Fields.DisDiagResult[this] = value; }
        }

        [Column("AbortionType"), ForeignKey("[dbo].[TblAbortionType]", "AbortionId"), LeftJoin("jAbortionType")]
        [DisplayName("Abortion type")]
        public Int32? AbortionType
        {
            get { return Fields.AbortionType[this]; }
            set { Fields.AbortionType[this] = value; }
        }

        [DisplayName("Abortion type "),QuickSearch, Expression("jAbortionType.[AbortionTypeEn]+' - '+jAbortionType.[AbortionTypeDari]+' - '+jAbortionType.[AbortionTypePashto]")]
        public String AbortionTypeName
        {
            get { return Fields.AbortionTypeName[this]; }
            set { Fields.AbortionTypeName[this] = value; }
        }


        [DisplayName("Mrid Facility Id"), Expression("jMrid.[FacilityID]")]
        public Int32? MridFacilityId
        {
            get { return Fields.MridFacilityId[this]; }
            set { Fields.MridFacilityId[this] = value; }
        }

        [DisplayName("Patient name"), Expression("jMrid.[PatName]"),QuickSearch]
        public String MridPatName
        {
            get { return Fields.MridPatName[this]; }
            set { Fields.MridPatName[this] = value; }
        }

        [DisplayName("Patient father name"), Expression("jMrid.[PatFatName]")]
        public String MridPatFatName
        {
            get { return Fields.MridPatFatName[this]; }
            set { Fields.MridPatFatName[this] = value; }
        }


        [DisplayName("Ward name"), Expression("jWardid.[WardName]+' - '+jWardid.[WardNameD]")]
        public String WardidWardName
        {
            get { return Fields.WardidWardName[this]; }
            set { Fields.WardidWardName[this] = value; }
        }

        [DisplayName("Ward name (dari)"), Expression("jWardid.[WardNameD]")]
        public String WardidWardNameD
        {
            get { return Fields.WardidWardNameD[this]; }
            set { Fields.WardidWardNameD[this] = value; }
        }

        [Insertable(false), Updatable(false), DisplayName("Tenant")]
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
            get { return Fields.AdId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AdDateH; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblAdmissionsDischargeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int64Field AdId;

            public Int64Field Mrid;

            public Int32Field Wardid;

            public Int32Field AdDiagnosis;

            public DateTimeField AdDate;

            public StringField AdDateH;

            public Int32Field AdAge;

            public Int32Field AdAgeType;

            public Int32Field AdCaseType;
            public StringField AdCaseTypeName;

            public Int32Field DisDiagCausDeath;

            public StringField DisDateH;

            public DateTimeField DisDate;

            public Int32Field DisStatus;

            public StringField UserName;

            public DateTimeField LastUpdated;

            public Int32Field TenantId;

            public Int32Field DisDiagResult;

            public Int32Field AbortionType;



            public Int32Field MridFacilityId;

            public StringField MridPatName;
            public StringField AdAgeTypeName;


            public StringField MridPatFatName;

            public StringField WardidWardName;

            public StringField WardidWardNameD;
            public StringField AbortionTypeName;
            public StringField MRN;

        }
    }
}
