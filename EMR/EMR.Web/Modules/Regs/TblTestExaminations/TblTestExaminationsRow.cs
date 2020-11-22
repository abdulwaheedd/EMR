
namespace EMR.Regs.Entities
{
    using EMR.Regs;
    using global::Administration;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Regs"), TableName("[dbo].[TblTestExaminations]")]
    [DisplayName("Examinations"), InstanceName("Examination")]
    [ReadPermission(PermissionKeys.TblTestExaminations.View)]
    [ModifyPermission(PermissionKeys.TblTestExaminations.Update)]
    [InsertPermission(PermissionKeys.TblTestExaminations.Insert)]
    [DeletePermission(PermissionKeys.TblTestExaminations.Delete)]

    public sealed class TblTestExaminationsRow : Row, IIdRow, INameRow,IMultiTenantRow
    {

        [DisplayName("Pat Test Id"), Column("PatTestID"), PrimaryKey, Identity]
        public Int32? PatTestId
        {
            get { return Fields.PatTestId[this]; }
            set { Fields.PatTestId[this] = value; }
        }

        [ForeignKey("[dbo].[TblDept]", "DpId"), LeftJoin("jDpt")]
        [Column("EdId"),DisplayName("Department"),NotNull]
        public Int32? EdId
        {
            get { return Fields.EdId[this]; }
            set { Fields.EdId[this] = value; }
        }


        [DisplayName("Department"), Expression("jDpt.[DeptNameD]")]
        public String DeptName
        {
            get { return Fields.DeptName[this]; }
            set { Fields.DeptName[this] = value; }
        }

        [ForeignKey("[dbo].[TblAdmissionsDischarge]", "AdId"), LeftJoin("jAd")]
        [DisplayName("AdmissionId"), Column("adID")]
        public Int64? AdId
        {
            get { return Fields.AdId[this]; }
            set { Fields.AdId[this] = value; }
        }

        [ForeignKey("[dbo].[TblExaminationsDetails]", "Edid"), LeftJoin("jEdId")]
        [DisplayName("Examination"), NotNull,Column("TestExaminations"), QuickSearch]
        public Int32? TestExaminations
        {
            get { return Fields.TestExaminations[this]; }
            set { Fields.TestExaminations[this] = value; }
        }

        [DisplayName("Examination"), Expression("jEdId.[EdName]")]
        public String TestName
        {
            get { return Fields.TestName[this]; }
            set { Fields.TestName[this] = value; }
        }

        [ForeignKey("[dbo].[TblDiagnosis]", "DiagnosisId"), LeftJoin("jDiag")]
        [DisplayName("Diagnosis"), Column("Diagnosis"),NotNull]
        public Int32? Diagnosis
        {
            get { return Fields.Diagnosis[this]; }
            set { Fields.Diagnosis[this] = value; }
        }

        [DisplayName("Diagnosis"), Expression("jDiag.[DiagnosisEn]+' - '+JDiag.[DiagnosisDari]+' - '+jDiag.[DiagnosisPashto]")]
        public String Diagnosisname
        {
            get { return Fields.Diagnosisname[this]; }
            set { Fields.Diagnosisname[this] = value; }
        }

        [DisplayName("User Name"), Size(255)]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName("Last Updated"), Size(255)]
        public String LastUpdated
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
            get { return Fields.PatTestId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TestName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblTestExaminationsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field PatTestId;

            public Int32Field EdId;

            public Int64Field AdId;

            public Int32Field TestExaminations;

            public Int32Field Diagnosis;

            public StringField UserName;

            public StringField LastUpdated;

            public Int32Field TenantId;


            public StringField TestName;
            public StringField DeptName;
            public StringField Diagnosisname;


            public Int64Field AdMrid;

		}
    }
}
