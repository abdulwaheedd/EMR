namespace EMR.Configs {
    export interface LkpLosstypesRow {
        LosstypeId?: number;
        Name?: string;
    }

    export namespace LkpLosstypesRow {
        export const idProperty = 'LosstypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Configs.LkpLosstypes';
        export const lookupKey = 'Configs.lkpLosstypes';

        export function getLookup(): Q.Lookup<LkpLosstypesRow> {
            return Q.getLookup<LkpLosstypesRow>('Configs.lkpLosstypes');
        }

        export declare const enum Fields {
            LosstypeId = "LosstypeId",
            Name = "Name"
        }
    }
}

