namespace EMR.Configs {
    export interface LkpRecommandsRow {
        RecomId?: number;
        RecommandName?: string;
    }

    export namespace LkpRecommandsRow {
        export const idProperty = 'RecomId';
        export const nameProperty = 'RecommandName';
        export const localTextPrefix = 'Configs.LkpRecommands';
        export const lookupKey = 'Configs.lkpRecommands';

        export function getLookup(): Q.Lookup<LkpRecommandsRow> {
            return Q.getLookup<LkpRecommandsRow>('Configs.lkpRecommands');
        }

        export declare const enum Fields {
            RecomId = "RecomId",
            RecommandName = "RecommandName"
        }
    }
}

