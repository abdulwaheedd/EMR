namespace EMR.Configs {
    export interface TblDiagnosisRow {
        DiagnosisId?: number;
        DiagnosisDari?: string;
        DiagnosisPashto?: string;
        DiagnosisEn?: string;
        DiagNosis?: string;
    }

    export namespace TblDiagnosisRow {
        export const idProperty = 'DiagnosisId';
        export const nameProperty = 'DiagNosis';
        export const localTextPrefix = 'Configs.TblDiagnosis';
        export const lookupKey = 'Configs.TblDiagnosis';

        export function getLookup(): Q.Lookup<TblDiagnosisRow> {
            return Q.getLookup<TblDiagnosisRow>('Configs.TblDiagnosis');
        }

        export declare const enum Fields {
            DiagnosisId = "DiagnosisId",
            DiagnosisDari = "DiagnosisDari",
            DiagnosisPashto = "DiagnosisPashto",
            DiagnosisEn = "DiagnosisEn",
            DiagNosis = "DiagNosis"
        }
    }
}

