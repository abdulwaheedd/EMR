
namespace EMR.Regs.Entities
{
    using EMR.Configs.Entities;
    using EMR.Regs;
    using global::Administration;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Regs"), TableName("[dbo].[TblReferral]")]
    [DisplayName("Referrals"), InstanceName("Referral")]
    [ReadPermission(PermissionKeys.TblReferral.View)]
    [ModifyPermission(PermissionKeys.TblReferral.Update)]
    [InsertPermission(PermissionKeys.TblReferral.Insert)]
    [DeletePermission(PermissionKeys.TblReferral.Delete)]
    public sealed class TblReferralRow : Row, IIdRow, INameRow,IMultiTenantRow
    {

        [DisplayName("Ref Id"), Column("refID"), PrimaryKey, Identity]
        public Int32? RefId
        {
            get { return Fields.RefId[this]; }
            set { Fields.RefId[this] = value; }
        }

        [DisplayName("AdmissionId"), Column("adID"), NotNull, ForeignKey("[dbo].[TblAdmissionsDischarge]", "adID"), LeftJoin("jAd"), TextualField("AdAdDateH")]
        public Int64? AdId
        {
            get { return Fields.AdId[this]; }
            set { Fields.AdId[this] = value; }
        }
        [NotNull, ForeignKey("[dbo].[FacilityInfo]", "FacilityID"), LeftJoin("jFacility"), LookupInclude]
        [DisplayName("Facility Id"), Column("FacilityID")]
        public Int32? FacilityId
        {
            get { return Fields.FacilityId[this]; }
            set { Fields.FacilityId[this] = value; }
        }

        [DisplayName("Facility referred to"), Expression("jFacility.[FacilityNameDari]")]
        public String FacilityName
        {
            get { return Fields.FacilityName[this]; }
            set { Fields.FacilityName[this] = value; }
        }

        [LookupEditor(typeof(TblWardRow))]
        [Column("WardId"), NotNull, ForeignKey("[dbo].[TblWard]", "WardId"), LeftJoin("jWard"),LookupInclude]
        [DisplayName("Ward")]
        public Int32? WardId
        {
            get { return Fields.WardId[this]; }
            set { Fields.WardId[this] = value; }
        }

        [DisplayName("Ward name"), Expression("jWard.[WardNameD]")]
        public String WardName
        {
            get { return Fields.WardName[this]; }
            set { Fields.WardName[this] = value; }
        }
        [ForeignKey("[dbo].[TblWardDiseases]", "WId"), LeftJoin("jwrds")]
        [DisplayName("Diagnosis"),NotNull, QuickSearch]
        public Int32? RefDiagnosis
        {
            get { return Fields.RefDiagnosis[this]; }
            set { Fields.RefDiagnosis[this] = value; }
        }

        [DisplayName("Disease name"), Expression("jwrds.[DiseaseDariName]")]
        public String DiseaseName
        {
            get { return Fields.DiseaseName[this]; }
            set { Fields.DiseaseName[this] = value; }
        }

        [DisplayName("Refer date(m)"),NotNull]
        public DateTime? RefDate
        {
            get { return Fields.RefDate[this]; }
            set { Fields.RefDate[this] = value; }
        }

        [DisplayName("Refer date(s)"), Size(15),NotNull]
        public String RefDateH
        {
            get { return Fields.RefDateH[this]; }
            set { Fields.RefDateH[this] = value; }
        }

        [DisplayName("Refer type"), Size(5),NotNull]
        public Int32? RefType
        {
            get { return Fields.RefType[this]; }
            set { Fields.RefType[this] = value; }
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


        [DisplayName("MRN"), Expression("jAd.[MRID]")]
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
            get { return Fields.RefId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DiseaseName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblReferralRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field RefId;

            public Int64Field AdId;

            public Int32Field FacilityId;

            public Int32Field WardId;

            public Int32Field RefDiagnosis;

            public DateTimeField RefDate;

            public StringField RefDateH;

            public Int32Field RefType;

            public StringField UserName;

            public DateTimeField LastUpdated;

            public Int32Field TenantId;

            public StringField WardName;
            public StringField DiseaseName;
            public StringField FacilityName;

            public Int64Field AdMrid;


		}
    }
}
