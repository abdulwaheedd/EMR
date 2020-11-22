namespace EMR.Configs {
    export interface TblNbWeightRow {
        NbWeightId?: number;
        NbWeightDari?: string;
        NbWeightPashto?: string;
        NbWeightEn?: string;
        NbWeight?: string;
    }

    export namespace TblNbWeightRow {
        export const idProperty = 'NbWeightId';
        export const nameProperty = 'NbWeight';
        export const localTextPrefix = 'Configs.TblNbWeight';
        export const lookupKey = 'Configs.TblNbWeight';

        export function getLookup(): Q.Lookup<TblNbWeightRow> {
            return Q.getLookup<TblNbWeightRow>('Configs.TblNbWeight');
        }

        export declare const enum Fields {
            NbWeightId = "NbWeightId",
            NbWeightDari = "NbWeightDari",
            NbWeightPashto = "NbWeightPashto",
            NbWeightEn = "NbWeightEn",
            NbWeight = "NbWeight"
        }
    }
}

