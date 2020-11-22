namespace EMR.Configs {
    export interface TblNbResultRow {
        NbResultId?: number;
        NbResultDari?: string;
        NbResultPashto?: string;
        NbResultEn?: string;
        NbResult?: string;
    }

    export namespace TblNbResultRow {
        export const idProperty = 'NbResultId';
        export const nameProperty = 'NbResult';
        export const localTextPrefix = 'Configs.TblNbResult';
        export const lookupKey = 'Configs.TblNbResult';

        export function getLookup(): Q.Lookup<TblNbResultRow> {
            return Q.getLookup<TblNbResultRow>('Configs.TblNbResult');
        }

        export declare const enum Fields {
            NbResultId = "NbResultId",
            NbResultDari = "NbResultDari",
            NbResultPashto = "NbResultPashto",
            NbResultEn = "NbResultEn",
            NbResult = "NbResult"
        }
    }
}

