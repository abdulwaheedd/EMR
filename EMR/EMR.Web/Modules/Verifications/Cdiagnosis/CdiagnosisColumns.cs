
namespace EMR.Verifications.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Verifications.Cdiagnosis")]
    [BasedOnRow(typeof(Entities.CdiagnosisRow), CheckNames = true)]
    public class CdiagnosisColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 DiagnosisId { get; set; }
        [Width(80)]
        public Int64 VisitId { get; set; }
        [Width(140)]
        public DateTime DateOfVisit { get; set; }
        [Width(140)]
        public String SDateOfVisit { get; set; }
        [Width(140)]
        [EditLink]
        public String SelfDiagnosis { get; set; }
        [Width(140)]
        public DateTime SelfDiagnosisDate { get; set; }
        [Width(140)]
        public String InitialDiagnosis { get; set; }
        [Width(140)]
        public DateTime InitialDiagnosisDate { get; set; }
        [Width(170)]
        public String TopoMain { get; set; }
        [Width(170)]
        public String TopoSub { get; set; }
        [Width(140)]
        public String FinalDiagnosis { get; set; }
        [Width(140)]
        public DateTime FinalDiagnosisDate { get; set; }
        [Width(140)]
        public String Comorbidity { get; set; }
    }
}