
namespace EMR.Regs.Entities
{
    using global::Administration;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Regs"), TableName("[dbo].[TblOperations]")]
    [DisplayName("Operations"), InstanceName("Operation")]
    [ReadPermission(PermissionKeys.TblOperations.View)]
    [ModifyPermission(PermissionKeys.TblOperations.Update)]
    [InsertPermission(PermissionKeys.TblOperations.Insert)]
    [DeletePermission(PermissionKeys.TblOperations.Delete)]
    public sealed class TblOperationsRow : Row, IIdRow, INameRow,IMultiTenantRow
    {
        [DisplayName("Evid"), Column("EVID"), PrimaryKey, Identity]
        public Int32? Evid
        {
            get { return Fields.Evid[this]; }
            set { Fields.Evid[this] = value; }
        }

        [DisplayName("Case type"), Column("WVID"),NotNull, ForeignKey("[dbo].[TblWRDVar]", "WVID"), LeftJoin("jWvid"), TextualField("WvidVarNameEnglish")]
        public Int32? Wvid
        {
            get { return Fields.Wvid[this]; }
            set { Fields.Wvid[this] = value; }
        }

        [Column("WardId"), NotNull, ForeignKey("[dbo].[TblWard]", "WardId"), LeftJoin("jWrd"),LookupInclude]
        [DisplayName("Ward")]
        public Int32? WardId
        {
            get { return Fields.WardId[this]; }
            set { Fields.WardId[this] = value; }
        }

        [DisplayName("Admission Id"), Column("AdID"), NotNull, ForeignKey("[dbo].[TblAdmissionsDischarge]", "adID"), LeftJoin("jAd"), TextualField("AdAdDateH")]
        public Int64? AdId
        {
            get { return Fields.AdId[this]; }
            set { Fields.AdId[this] = value; }
        }
        [ForeignKey("[dbo].[TblWardDiseases]", "WId"), LeftJoin("jwrds")]
        [DisplayName("Result"), Column("AdValue"), NotNull]
        public Int32? AdValue
        {
            get { return Fields.AdValue[this]; }
            set { Fields.AdValue[this] = value; }
        }

        [DisplayName("Remarks"), QuickSearch,TextAreaEditor(Rows =3)]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
        }

        [DisplayName("User name"), Size(50)]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName("Update date")]
        public DateTime? LastUpdated
        {
            get { return Fields.LastUpdated[this]; }
            set { Fields.LastUpdated[this] = value; }
        }


        [DisplayName("Wvid Wrdid"), Expression("jWvid.[WRDID]")]
        public Int32? WvidWrdid
        {
            get { return Fields.WvidWrdid[this]; }
            set { Fields.WvidWrdid[this] = value; }
        }

        [DisplayName("Wvid Diagn Treat Comp"), Expression("jWvid.[DiagnTreatComp]")]
        public Int32? WvidDiagnTreatComp
        {
            get { return Fields.WvidDiagnTreatComp[this]; }
            set { Fields.WvidDiagnTreatComp[this] = value; }
        }

        [DisplayName("Indicator name (english)"), Expression("jWvid.[VarNameEnglish]")]
        public String WvidVarNameEnglish
        {
            get { return Fields.WvidVarNameEnglish[this]; }
            set { Fields.WvidVarNameEnglish[this] = value; }
        }

        [DisplayName("Indicate name"), Expression("jWvid.[VarNameDari]")]
        public String WvidVarNameDari
        {
            get { return Fields.WvidVarNameDari[this]; }
            set { Fields.WvidVarNameDari[this] = value; }
        }

        [DisplayName("Wvid Var Name Pashto"), Expression("jWvid.[VarNamePashto]")]
        public String WvidVarNamePashto
        {
            get { return Fields.WvidVarNamePashto[this]; }
            set { Fields.WvidVarNamePashto[this] = value; }
        }

        [DisplayName("Wvid Var Specification"), Expression("jWvid.[VarSpecification]")]
        public String WvidVarSpecification
        {
            get { return Fields.WvidVarSpecification[this]; }
            set { Fields.WvidVarSpecification[this] = value; }
        }

        [DisplayName("Ward name"), Expression("jWrd.[WardNameD]")]
        public String Wardname
        {
            get { return Fields.Wardname[this]; }
            set { Fields.Wardname[this] = value; }
        }
        [DisplayName("Result"), Expression("jwrds.[DiseaseDariName]")]
        public String DiseaseName
        {
            get { return Fields.DiseaseName[this]; }
            set { Fields.DiseaseName[this] = value; }
        }

        [DisplayName("Ad Mrid"), Expression("jAd.[MRID]")]
        public Int64? AdMrid
        {
            get { return Fields.AdMrid[this]; }
            set { Fields.AdMrid[this] = value; }
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
            get { return Fields.Evid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Remarks; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblOperationsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Evid;
            public Int32Field Wvid;
            public Int32Field WardId;
            public Int64Field AdId;
            public Int32Field AdValue;
            public StringField Remarks;
            public StringField UserName;
            public DateTimeField LastUpdated;
            public Int32Field TenantId;

            public Int32Field WvidWrdid;
            public Int32Field WvidDiagnTreatComp;
            public StringField WvidVarNameEnglish;
            public StringField WvidVarNameDari;
            public StringField WvidVarNamePashto;
            public StringField WvidVarSpecification;

            public Int64Field AdMrid;
            public StringField Wardname;
            public StringField DiseaseName;
        }
    }
}
