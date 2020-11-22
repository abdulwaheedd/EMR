﻿
namespace EMR.Verifications.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using EMR.Configs.Entities;
    using EMR.Modules.OPD.Diagnosis;

    [FormScript("Verifications.Cdiagnosis")]
    [BasedOnRow(typeof(Entities.CdiagnosisRow), CheckNames = true)]
    public class CdiagnosisForm
    {
        public Int64 Mrid { get; set; }
        public Int64 VisitId { get; set; }
        [HalfWidth]
        [LookupEditor(typeof(StagesRow))]
        public Int32 StageId { get; set; }
        [Category("Initial")]
        [HalfWidth]
        [LookupEditor(typeof(TblWardDiseasesRow))]
        public Int32 SelfDiagnosisId { get; set; }
        [HalfWidth]
        public DateTime SelfDiagnosisDate { get; set; }
        [HalfWidth]
        [LookupEditor(typeof(TblWardDiseasesRow))]
        public Int32 InitialDiagnosisId { get; set; }
        [HalfWidth]
        public DateTime InitialDiagnosisDate { get; set; }
        [Category("Final")]
        [HalfWidth]
        [LookupEditor(typeof(TopographyMainRow))]
        public Int32 TopomainId { get; set; }
        [HalfWidth]
        [LookupEditor(typeof(TopographySubRow), CascadeField = "TopomainId", CascadeFrom = "TopomainId")]
        public Int32 ToposubId { get; set; }
        [HalfWidth]
        [DisplayName("Final Diagnosis(Morphology)")]
        [LookupEditor(typeof(OncologyDiseaseLookup))]
        public Int32 FinalDiagnosisId { get; set; }
        [HalfWidth]
        public DateTime FinalDiagnosisDate { get; set; }
        [Category("Comorbidity")]
        [OneThirdWidth]
        [LookupEditor(typeof(TblWardDiseasesRow))]
        public Int32 ComorbidityId { get; set; }
        [OneThirdWidth]
        [LookupEditor(typeof(TblWardDiseasesRow))]
        public Int32 Comorbidity2Id { get; set; }
        [OneThirdWidth]
        [LookupEditor(typeof(TblWardDiseasesRow))]
        public Int32 Comorbidity3Id { get; set; }
    }
}