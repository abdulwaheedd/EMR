namespace EMR.Configs {
    export interface TblWardRow {
        WardId?: number;
        WardName?: string;
        WardNameD?: string;
        WardNumBeds?: number;
        Ward?: string;
    }

    export namespace TblWardRow {
        export const idProperty = 'WardId';
        export const nameProperty = 'Ward';
        export const localTextPrefix = 'Configs.TblWard';
        export const lookupKey = 'Configs.TblWard';

        export function getLookup(): Q.Lookup<TblWardRow> {
            return Q.getLookup<TblWardRow>('Configs.TblWard');
        }

        export declare const enum Fields {
            WardId = "WardId",
            WardName = "WardName",
            WardNameD = "WardNameD",
            WardNumBeds = "WardNumBeds",
            Ward = "Ward"
        }
    }
}

