
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblDiagnosis]")]
    [DisplayName("Diagnosis"), InstanceName("Diagnosis")]
    [ReadPermission(PermissionKeys.TblDiagnosis.View)]
    [ModifyPermission(PermissionKeys.TblDiagnosis.Update)]
    [InsertPermission(PermissionKeys.TblDiagnosis.Insert)]
    [DeletePermission(PermissionKeys.TblDiagnosis.Delete)]
    [LookupScript("Configs.TblDiagnosis")]
    public sealed class TblDiagnosisRow : Row, IIdRow, INameRow
    {
        [DisplayName("Diagnosis Id"), PrimaryKey]
        public Int32? DiagnosisId
        {
            get { return Fields.DiagnosisId[this]; }
            set { Fields.DiagnosisId[this] = value; }
        }

        [DisplayName("Diagnosis Dari"), Size(50), QuickSearch]
        public String DiagnosisDari
        {
            get { return Fields.DiagnosisDari[this]; }
            set { Fields.DiagnosisDari[this] = value; }
        }

        [DisplayName("Diagnosis Pashto"), Size(50)]
        public String DiagnosisPashto
        {
            get { return Fields.DiagnosisPashto[this]; }
            set { Fields.DiagnosisPashto[this] = value; }
        }

        [DisplayName("Diagnosis En"), Size(10)]
        public String DiagnosisEn
        {
            get { return Fields.DiagnosisEn[this]; }
            set { Fields.DiagnosisEn[this] = value; }
        }


        [DisplayName("Diagnosis"), Expression("t0.[DiagnosisEn]+' - '+t0.[DiagnosisDari]+' - '+t0.[DiagnosisPashto]")]
        public String DiagNosis
        {
            get { return Fields.DiagNosis[this]; }
            set { Fields.DiagNosis[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DiagnosisId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DiagNosis; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblDiagnosisRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DiagnosisId;
            public StringField DiagnosisDari;
            public StringField DiagnosisPashto;
            public StringField DiagnosisEn;
            public StringField DiagNosis;

        }
    }
}
