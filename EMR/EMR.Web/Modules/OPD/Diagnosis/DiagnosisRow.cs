
namespace EMR.OPD.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("OPD"), TableName("[dbo].[Diagnosis]")]
    [DisplayName("Diagnosis"), InstanceName("Diagnosis")]
    [ReadPermission(PermissionKeys.Diagnosis.View)]
    [ModifyPermission(PermissionKeys.Diagnosis.Update)]
    [InsertPermission(PermissionKeys.Diagnosis.Insert)]
    [DeletePermission(PermissionKeys.Diagnosis.Delete)]
    public sealed class DiagnosisRow : Row, IIdRow
    {
        [DisplayName("Diagnosis Id"), Identity]
        public Int64? DiagnosisId
        {
            get { return Fields.DiagnosisId[this]; }
            set { Fields.DiagnosisId[this] = value; }
        }

        [DisplayName("Visit"), ForeignKey("[dbo].[Visits]", "VisitId"), LeftJoin("jVisit"), TextualField("VisitPhoneNumber")]
        public Int64? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
        }

        [DisplayName("Self Diagnosis")]
        [ForeignKey("[dbo].[TblWardDiseases]", "wID"), LeftJoin("jTblDiseaseSelf")]
        public Int32? SelfDiagnosisId
        {
            get { return Fields.SelfDiagnosisId[this]; }
            set { Fields.SelfDiagnosisId[this] = value; }
        }

        [DisplayName("Self Diag Date")]
        public DateTime? SelfDiagnosisDate
        {
            get { return Fields.SelfDiagnosisDate[this]; }
            set { Fields.SelfDiagnosisDate[this] = value; }
        }

        [DisplayName("Initial Diagnosis")]
        [ForeignKey("[dbo].[TblWardDiseases]", "wID"), LeftJoin("jTblDiseaseInitial")]
        public Int32? InitialDiagnosisId
        {
            get { return Fields.InitialDiagnosisId[this]; }
            set { Fields.InitialDiagnosisId[this] = value; }
        }

        [DisplayName("Initial Diag Date")]
        public DateTime? InitialDiagnosisDate
        {
            get { return Fields.InitialDiagnosisDate[this]; }
            set { Fields.InitialDiagnosisDate[this] = value; }
        }
        [ForeignKey("[dbo].[TblWardDiseases]", "wID"),NotNull, LeftJoin("jTblDiseaseFinal")]
        [DisplayName("Final Diagnosis")]
        public Int32? FinalDiagnosisId
        {
            get { return Fields.FinalDiagnosisId[this]; }
            set { Fields.FinalDiagnosisId[this] = value; }
        }

        [DisplayName("Final Diag Date"),NotNull]
        public DateTime? FinalDiagnosisDate
        {
            get { return Fields.FinalDiagnosisDate[this]; }
            set { Fields.FinalDiagnosisDate[this] = value; }
        }

        [ForeignKey("[dbo].[TblWardDiseases]", "wID"), LeftJoin("jTblDiseaseComor")]
        [DisplayName("Comorbidity I")]
        public Int32? ComorbidityId
        {
            get { return Fields.ComorbidityId[this]; }
            set { Fields.ComorbidityId[this] = value; }
        }

        [ForeignKey("[dbo].[TblWardDiseases]", "wID"), LeftJoin("jTblDiseaseComor2")]
        [DisplayName("Comorbidity II")]
        public Int32? Comorbidity2Id
        {
            get { return Fields.Comorbidity2Id[this]; }
            set { Fields.Comorbidity2Id[this] = value; }
        }

        [ForeignKey("[dbo].[TblWardDiseases]", "wID"), LeftJoin("jTblDiseaseComor3")]
        [DisplayName("Comorbidity III")]
        public Int32? Comorbidity3Id
        {
            get { return Fields.Comorbidity3Id[this]; }
            set { Fields.Comorbidity3Id[this] = value; }
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

        [DisplayName("Visit Mrid"), Expression("jVisit.[MRID]")]
        public Int64? VisitMrid
        {
            get { return Fields.VisitMrid[this]; }
            set { Fields.VisitMrid[this] = value; }
        }

        [DisplayName("Topography 1"),NotNull, ForeignKey("[dbo].[TopographyMain]", "TopomainId"), LeftJoin("Topomain")]
        public Int32? TopomainId
        {
            get { return Fields.TopomainId[this]; }
            set { Fields.TopomainId[this] = value; }
        }

        [DisplayName("Topography 2"),NotNull, ForeignKey("[dbo].[TopographySub]", "ToposubId"), LeftJoin("jToposub")]
        public Int32? ToposubId
        {
            get { return Fields.ToposubId[this]; }
            set { Fields.ToposubId[this] = value; }
        }

        [DisplayName("Topography 1"), Expression("Topomain.[TopographyMName]")]
        public String TopoMain
        {
            get { return Fields.TopoMain[this]; }
            set { Fields.TopoMain[this] = value; }
        }


        [DisplayName("Topography 2"), Expression("jToposub.[TopographySName]")]
        public String TopoSub
        {
            get { return Fields.TopoSub[this]; }
            set { Fields.TopoSub[this] = value; }
        }
        

        [DisplayName("Self Diagnosis"), Expression("jTblDiseaseSelf.[DiseasesName]")]
        public String SelfDiagnosis
        {
            get { return Fields.SelfDiagnosis[this]; }
            set { Fields.SelfDiagnosis[this] = value; }
        }
        
        [DisplayName("Impression"), Expression("jTblDiseaseSelf.[DiseasesName]")]
        public String InitialDiagnosis
        {
            get { return Fields.InitialDiagnosis[this]; }
            set { Fields.InitialDiagnosis[this] = value; }
        }

                
        [DisplayName("Final Diagnosis (Morph)"), Expression("jTblDiseaseFinal.[DiseasesName]")]
        public String FinalDiagnosis
        {
            get { return Fields.FinalDiagnosis[this]; }
            set { Fields.FinalDiagnosis[this] = value; }
        }

                
        [DisplayName("Comorbidity"), Expression("jTblDiseaseComor.[DiseasesName]")]
        public String Comorbidity
        {
            get { return Fields.Comorbidity[this]; }
            set { Fields.Comorbidity[this] = value; }
        }                
        [DisplayName("Stage")]
        public Int32? StageId
        {
            get { return Fields.StageId[this]; }
            set { Fields.StageId[this] = value; }
        }

        [DisplayName("Note/Observation")]
        [HtmlContentEditor]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DiagnosisId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DiagnosisRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field DiagnosisId;
            public Int64Field VisitId;
            public Int32Field SelfDiagnosisId;
            public DateTimeField SelfDiagnosisDate;
            public Int32Field InitialDiagnosisId;
            public DateTimeField InitialDiagnosisDate;
            public Int32Field FinalDiagnosisId;
            public DateTimeField FinalDiagnosisDate;
            public Int32Field ComorbidityId;
            public Int32Field Comorbidity2Id;
            public Int32Field Comorbidity3Id;
            public Int32Field UserId;
            public DateTimeField Updated;
            public Int32Field TopomainId;
            public Int32Field ToposubId;
            public Int32Field StageId;
            public StringField Note;

            public StringField TopoMain;
            public StringField TopoSub;

            public StringField SelfDiagnosis;
            public StringField InitialDiagnosis;
            public StringField FinalDiagnosis;
            public StringField Comorbidity;


            public Int64Field VisitMrid;
        }
    }
}
