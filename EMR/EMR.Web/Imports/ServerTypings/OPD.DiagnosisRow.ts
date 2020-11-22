namespace EMR.OPD {
    export interface DiagnosisRow {
        DiagnosisId?: number;
        VisitId?: number;
        SelfDiagnosisId?: number;
        SelfDiagnosisDate?: string;
        InitialDiagnosisId?: number;
        InitialDiagnosisDate?: string;
        FinalDiagnosisId?: number;
        FinalDiagnosisDate?: string;
        ComorbidityId?: number;
        Comorbidity2Id?: number;
        Comorbidity3Id?: number;
        UserId?: number;
        Updated?: string;
        TopomainId?: number;
        ToposubId?: number;
        StageId?: number;
        Note?: string;
        TopoMain?: string;
        TopoSub?: string;
        SelfDiagnosis?: string;
        InitialDiagnosis?: string;
        FinalDiagnosis?: string;
        Comorbidity?: string;
        VisitMrid?: number;
    }

    export namespace DiagnosisRow {
        export const idProperty = 'DiagnosisId';
        export const localTextPrefix = 'OPD.Diagnosis';

        export declare const enum Fields {
            DiagnosisId = "DiagnosisId",
            VisitId = "VisitId",
            SelfDiagnosisId = "SelfDiagnosisId",
            SelfDiagnosisDate = "SelfDiagnosisDate",
            InitialDiagnosisId = "InitialDiagnosisId",
            InitialDiagnosisDate = "InitialDiagnosisDate",
            FinalDiagnosisId = "FinalDiagnosisId",
            FinalDiagnosisDate = "FinalDiagnosisDate",
            ComorbidityId = "ComorbidityId",
            Comorbidity2Id = "Comorbidity2Id",
            Comorbidity3Id = "Comorbidity3Id",
            UserId = "UserId",
            Updated = "Updated",
            TopomainId = "TopomainId",
            ToposubId = "ToposubId",
            StageId = "StageId",
            Note = "Note",
            TopoMain = "TopoMain",
            TopoSub = "TopoSub",
            SelfDiagnosis = "SelfDiagnosis",
            InitialDiagnosis = "InitialDiagnosis",
            FinalDiagnosis = "FinalDiagnosis",
            Comorbidity = "Comorbidity",
            VisitMrid = "VisitMrid"
        }
    }
}

