namespace EMR.Configs {
    export interface TblOutcomesMotherRow {
        OutcomeId?: number;
        OutcomeEng?: string;
        OutcomeDari?: string;
        OutcomeName?: string;
    }

    export namespace TblOutcomesMotherRow {
        export const idProperty = 'OutcomeId';
        export const nameProperty = 'OutcomeName';
        export const localTextPrefix = 'Configs.TblOutcomesMother';
        export const lookupKey = 'Configs.TblOutcomesMother';

        export function getLookup(): Q.Lookup<TblOutcomesMotherRow> {
            return Q.getLookup<TblOutcomesMotherRow>('Configs.TblOutcomesMother');
        }

        export declare const enum Fields {
            OutcomeId = "OutcomeId",
            OutcomeEng = "OutcomeEng",
            OutcomeDari = "OutcomeDari",
            OutcomeName = "OutcomeName"
        }
    }
}

