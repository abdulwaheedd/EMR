namespace EMR.Configs {
    export interface TblNbstatusRow {
        NbstatusId?: number;
        NbstatusDari?: string;
        NbstatusPashto?: string;
        NbstatusEng?: string;
        NbStatus?: string;
    }

    export namespace TblNbstatusRow {
        export const idProperty = 'NbstatusId';
        export const nameProperty = 'NbStatus';
        export const localTextPrefix = 'Configs.TblNbstatus';
        export const lookupKey = 'Configs.TblNbstatus';

        export function getLookup(): Q.Lookup<TblNbstatusRow> {
            return Q.getLookup<TblNbstatusRow>('Configs.TblNbstatus');
        }

        export declare const enum Fields {
            NbstatusId = "NbstatusId",
            NbstatusDari = "NbstatusDari",
            NbstatusPashto = "NbstatusPashto",
            NbstatusEng = "NbstatusEng",
            NbStatus = "NbStatus"
        }
    }
}

