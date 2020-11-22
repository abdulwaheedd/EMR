namespace EMR.Configs {
    export interface LkpHistoryRow {
        HistoryId?: number;
        HistoryName?: string;
    }

    export namespace LkpHistoryRow {
        export const idProperty = 'HistoryId';
        export const nameProperty = 'HistoryName';
        export const localTextPrefix = 'Configs.LkpHistory';
        export const lookupKey = 'Configs.lkpHistory';

        export function getLookup(): Q.Lookup<LkpHistoryRow> {
            return Q.getLookup<LkpHistoryRow>('Configs.lkpHistory');
        }

        export declare const enum Fields {
            HistoryId = "HistoryId",
            HistoryName = "HistoryName"
        }
    }
}

