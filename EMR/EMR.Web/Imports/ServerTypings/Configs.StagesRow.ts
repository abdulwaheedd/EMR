namespace EMR.Configs {
    export interface StagesRow {
        StageId?: number;
        Stagename?: string;
    }

    export namespace StagesRow {
        export const idProperty = 'StageId';
        export const nameProperty = 'Stagename';
        export const localTextPrefix = 'Configs.Stages';
        export const lookupKey = 'Configs.Stages';

        export function getLookup(): Q.Lookup<StagesRow> {
            return Q.getLookup<StagesRow>('Configs.Stages');
        }

        export declare const enum Fields {
            StageId = "StageId",
            Stagename = "Stagename"
        }
    }
}

