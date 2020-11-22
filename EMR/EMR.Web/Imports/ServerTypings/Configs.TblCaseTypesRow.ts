namespace EMR.Configs {
    export interface TblCaseTypesRow {
        CaseId?: number;
        CasetypeEn?: string;
        CasetypeDari?: string;
        CasetypePashto?: string;
        CaseTypeName?: string;
    }

    export namespace TblCaseTypesRow {
        export const idProperty = 'CaseId';
        export const nameProperty = 'CaseTypeName';
        export const localTextPrefix = 'Configs.TblCaseTypes';
        export const lookupKey = 'Configs.TblCaseTypes';

        export function getLookup(): Q.Lookup<TblCaseTypesRow> {
            return Q.getLookup<TblCaseTypesRow>('Configs.TblCaseTypes');
        }

        export declare const enum Fields {
            CaseId = "CaseId",
            CasetypeEn = "CasetypeEn",
            CasetypeDari = "CasetypeDari",
            CasetypePashto = "CasetypePashto",
            CaseTypeName = "CaseTypeName"
        }
    }
}

