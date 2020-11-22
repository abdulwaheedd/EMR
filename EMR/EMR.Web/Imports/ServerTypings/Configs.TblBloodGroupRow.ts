namespace EMR.Configs {
    export interface TblBloodGroupRow {
        BloodGroupId?: number;
        BloodGroup?: string;
    }

    export namespace TblBloodGroupRow {
        export const idProperty = 'BloodGroupId';
        export const nameProperty = 'BloodGroup';
        export const localTextPrefix = 'Configs.TblBloodGroup';
        export const lookupKey = 'Configs.TblBloodGroup';

        export function getLookup(): Q.Lookup<TblBloodGroupRow> {
            return Q.getLookup<TblBloodGroupRow>('Configs.TblBloodGroup');
        }

        export declare const enum Fields {
            BloodGroupId = "BloodGroupId",
            BloodGroup = "BloodGroup"
        }
    }
}

