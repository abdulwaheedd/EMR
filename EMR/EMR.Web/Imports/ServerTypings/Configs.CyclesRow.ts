namespace EMR.Configs {
    export interface CyclesRow {
        CycleId?: number;
        Cyclename?: string;
        Cycledescription?: string;
    }

    export namespace CyclesRow {
        export const idProperty = 'CycleId';
        export const nameProperty = 'Cyclename';
        export const localTextPrefix = 'Configs.Cycles';
        export const lookupKey = 'Configs.lkpCycles';

        export function getLookup(): Q.Lookup<CyclesRow> {
            return Q.getLookup<CyclesRow>('Configs.lkpCycles');
        }

        export declare const enum Fields {
            CycleId = "CycleId",
            Cyclename = "Cyclename",
            Cycledescription = "Cycledescription"
        }
    }
}

