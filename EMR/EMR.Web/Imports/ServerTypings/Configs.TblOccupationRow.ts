namespace EMR.Configs {
    export interface TblOccupationRow {
        Oid?: number;
        OccupationDari?: string;
        OccupationEng?: string;
        OccupationName?: string;
    }

    export namespace TblOccupationRow {
        export const idProperty = 'Oid';
        export const nameProperty = 'OccupationName';
        export const localTextPrefix = 'Configs.TblOccupation';
        export const lookupKey = 'Configs.TblOccupation';

        export function getLookup(): Q.Lookup<TblOccupationRow> {
            return Q.getLookup<TblOccupationRow>('Configs.TblOccupation');
        }

        export declare const enum Fields {
            Oid = "Oid",
            OccupationDari = "OccupationDari",
            OccupationEng = "OccupationEng",
            OccupationName = "OccupationName"
        }
    }
}

