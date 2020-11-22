namespace EMR.Verifications {
    export interface CdiagnosisRow {
        DiagnosisId?: number;
        Mrid?: number;
        VisitId?: number;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        SelfDiagnosisId?: number;
        SelfDiagnosisDate?: string;
        InitialDiagnosisId?: number;
        InitialDiagnosisDate?: string;
        FinalDiagnosisId?: number;
        FinalDiagnosisDate?: string;
        ComorbidityId?: number;
        TopomainId?: number;
        ToposubId?: number;
        StageId?: number;
        Comorbidity2Id?: number;
        Comorbidity3Id?: number;
        TopoMain?: string;
        TopoSub?: string;
        SelfDiagnosis?: string;
        InitialDiagnosis?: string;
        FinalDiagnosis?: string;
        Comorbidity?: string;
    }

    export namespace CdiagnosisRow {
        export const idProperty = 'DiagnosisId';
        export const nameProperty = 'SDateOfVisit';
        export const localTextPrefix = 'Verifications.Cdiagnosis';

        export declare const enum Fields {
            DiagnosisId = "DiagnosisId",
            Mrid = "Mrid",
            VisitId = "VisitId",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            SelfDiagnosisId = "SelfDiagnosisId",
            SelfDiagnosisDate = "SelfDiagnosisDate",
            InitialDiagnosisId = "InitialDiagnosisId",
            InitialDiagnosisDate = "InitialDiagnosisDate",
            FinalDiagnosisId = "FinalDiagnosisId",
            FinalDiagnosisDate = "FinalDiagnosisDate",
            ComorbidityId = "ComorbidityId",
            TopomainId = "TopomainId",
            ToposubId = "ToposubId",
            StageId = "StageId",
            Comorbidity2Id = "Comorbidity2Id",
            Comorbidity3Id = "Comorbidity3Id",
            TopoMain = "TopoMain",
            TopoSub = "TopoSub",
            SelfDiagnosis = "SelfDiagnosis",
            InitialDiagnosis = "InitialDiagnosis",
            FinalDiagnosis = "FinalDiagnosis",
            Comorbidity = "Comorbidity"
        }
    }
}

