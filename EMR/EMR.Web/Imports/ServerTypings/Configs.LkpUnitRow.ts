namespace EMR.Configs {
    export interface LkpUnitRow {
        UnitId?: number;
        UnitName?: string;
    }

    export namespace LkpUnitRow {
        export const idProperty = 'UnitId';
        export const nameProperty = 'UnitName';
        export const localTextPrefix = 'Configs.LkpUnit';
        export const lookupKey = 'Configs.lkpUnit';

        export function getLookup(): Q.Lookup<LkpUnitRow> {
            return Q.getLookup<LkpUnitRow>('Configs.lkpUnit');
        }

        export declare const enum Fields {
            UnitId = "UnitId",
            UnitName = "UnitName"
        }
    }
}

