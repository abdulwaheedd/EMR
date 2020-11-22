
namespace EMR.Regs.Entities
{
    using global::Administration;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Regs"), TableName("[dbo].[TblNewBornManagement]")]
    [DisplayName("Born Management"), InstanceName("New Born")]
    [ReadPermission(PermissionKeys.TblNewBornManagement.View)]
    [ModifyPermission(PermissionKeys.TblNewBornManagement.Update)]
    [InsertPermission(PermissionKeys.TblNewBornManagement.Insert)]
    [DeletePermission(PermissionKeys.TblNewBornManagement.Delete)]
    public sealed class TblNewBornManagementRow : Row, IIdRow, INameRow,IMultiTenantRow
    {

        [DisplayName("ID"), Column("nbID"), PrimaryKey,Identity]
        public Int32? NbId
        {
            get { return Fields.NbId[this]; }
            set { Fields.NbId[this] = value; }
        }

        [DisplayName("AdmissionID"), Column("AdID"), ForeignKey("[dbo].[TblAdmissionsDischarge]", "adID"), LeftJoin("jAd"), TextualField("AdAdDateH")]
        public Int64? AdId
        {
            get { return Fields.AdId[this]; }
            set { Fields.AdId[this] = value; }
        }
        [ForeignKey("[dbo].[TblNbstatus]", "NbstatusId"), LeftJoin("jStatus")]
        [DisplayName("Newborn status"), Column("NBStatus"), Size(255), NotNull, QuickSearch]
        public Int32? NbStatus
        {
            get { return Fields.NbStatus[this]; }
            set { Fields.NbStatus[this] = value; }
        }

        [DisplayName("Newborn status"), Expression("jStatus.[NbstatusEng]+' - '+jStatus.[NbstatusDari]"), QuickSearch]
        public String NewbornStatus
        {
            get { return Fields.NewbornStatus[this]; }
            set { Fields.NewbornStatus[this] = value; }
        }

        [ForeignKey("[dbo].[TblNbResult]", "NbResultId"), LeftJoin("jOutcome")]
        [DisplayName("Newborn outcome"), Column("NBOutcome"), Size(255), NotNull]
        public Int32? NbOutcome
        {
            get { return Fields.NbOutcome[this]; }
            set { Fields.NbOutcome[this] = value; }
        }

        [DisplayName("Newborn outcome"), Expression("jOutcome.[NbResultEn]+' - '+jOutcome.[NbResultDari]"), QuickSearch]
        public String Newbornoutcome
        {
            get { return Fields.Newbornoutcome[this]; }
            set { Fields.Newbornoutcome[this] = value; }
        }

        [ForeignKey("[dbo].[TblNbWeight]", "NbWeightId"), LeftJoin("jWeight")]
        [DisplayName("Newborn weight"), Column("NBWeight"), NotNull]
        public Int32? NbWeight
        {
            get { return Fields.NbWeight[this]; }
            set { Fields.NbWeight[this] = value; }
        }

        [DisplayName("Newborn weight"), Expression("jWeight.[NbWeightEn]+' - '+jWeight.[NbWeightDari]"), QuickSearch]
        public String Newbornweight
        {
            get { return Fields.Newbornweight[this]; }
            set { Fields.Newbornweight[this] = value; }
        }

        [ForeignKey("[dbo].[TblChild]", "ChildId"), LeftJoin("jChild")]
        [DisplayName("Newborn child nth"), Column("NBNumber"),NotNull]
        public Int32? NbNumber
        {
            get { return Fields.NbNumber[this]; }
            set { Fields.NbNumber[this] = value; }
        }

        [DisplayName("Which child"), Expression("jChild.[ChildEn]+' - '+jChild.[ChildDari]"), QuickSearch]
        public String Newbornchild
        {
            get { return Fields.Newbornchild[this]; }
            set { Fields.Newbornchild[this] = value; }
        }

        [ForeignKey("[dbo].[TblGender]", "GenderId"), LeftJoin("jGender")]
        [DisplayName("Gender"), Column("NBGender"), NotNull]
        public Int32? NbGender
        {
            get { return Fields.NbGender[this]; }
            set { Fields.NbGender[this] = value; }
        }

        [DisplayName("Child gender"), Expression("jGender.[GenderEng]+' - '+jGender.[GenderDa]"), QuickSearch]
        public String Newborngender
        {
            get { return Fields.Newborngender[this]; }
            set { Fields.Newborngender[this] = value; }
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

        [DisplayName("Ad Wardid"), Expression("jAd.[WARDID]")]
        public Int32? AdWardid
        {
            get { return Fields.AdWardid[this]; }
            set { Fields.AdWardid[this] = value; }
        }

        [DisplayName("Ad Ad Diagnosis"), Expression("jAd.[AdDiagnosis]")]
        public Int32? AdAdDiagnosis
        {
            get { return Fields.AdAdDiagnosis[this]; }
            set { Fields.AdAdDiagnosis[this] = value; }
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
            get { return Fields.NbId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.UserName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblNewBornManagementRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field NbId;

            public Int64Field AdId;

            public Int32Field NbStatus;

            public Int32Field NbOutcome;

            public Int32Field NbWeight;

            public Int32Field NbNumber;

            public Int32Field NbGender;

            public StringField UserName;

            public DateTimeField LastUpdated;

            public Int32Field TenantId;



            public Int64Field AdMrid;

            public Int32Field AdWardid;

            public Int32Field AdAdDiagnosis;

            public StringField NewbornStatus;
            public StringField Newbornoutcome;
            public StringField Newbornweight;
            public StringField Newbornchild;
            public StringField Newborngender;
        }
    }
}
