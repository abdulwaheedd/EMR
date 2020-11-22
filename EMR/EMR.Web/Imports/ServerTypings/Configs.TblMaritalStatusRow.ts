namespace EMR.Configs {
    export interface TblMaritalStatusRow {
        MariId?: number;
        PatMaritalStatusDari?: string;
        PatMaritalStatusEng?: string;
        MaritalStatus?: string;
    }

    export namespace TblMaritalStatusRow {
        export const idProperty = 'MariId';
        export const nameProperty = 'MaritalStatus';
        export const localTextPrefix = 'Configs.TblMaritalStatus';
        export const lookupKey = 'Configs.TblMaritalStatus';

        export function getLookup(): Q.Lookup<TblMaritalStatusRow> {
            return Q.getLookup<TblMaritalStatusRow>('Configs.TblMaritalStatus');
        }

        export declare const enum Fields {
            MariId = "MariId",
            PatMaritalStatusDari = "PatMaritalStatusDari",
            PatMaritalStatusEng = "PatMaritalStatusEng",
            MaritalStatus = "MaritalStatus"
        }
    }
}

