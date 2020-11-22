namespace EMR.Configs {
    export interface BloodStatusRow {
        BId?: number;
        Bloodstatus?: string;
    }

    export namespace BloodStatusRow {
        export const idProperty = 'BId';
        export const nameProperty = 'Bloodstatus';
        export const localTextPrefix = 'Configs.BloodStatus';
        export const lookupKey = 'Configs.LkpBloodStatus';

        export function getLookup(): Q.Lookup<BloodStatusRow> {
            return Q.getLookup<BloodStatusRow>('Configs.LkpBloodStatus');
        }

        export declare const enum Fields {
            BId = "BId",
            Bloodstatus = "Bloodstatus"
        }
    }
}

