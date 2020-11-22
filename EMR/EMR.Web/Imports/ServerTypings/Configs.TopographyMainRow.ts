namespace EMR.Configs {
    export interface TopographyMainRow {
        TopomainId?: number;
        TopographyMName?: string;
        Icd0Code?: string;
    }

    export namespace TopographyMainRow {
        export const idProperty = 'TopomainId';
        export const nameProperty = 'TopographyMName';
        export const localTextPrefix = 'Configs.TopographyMain';
        export const lookupKey = 'Configs.TopographyMain';

        export function getLookup(): Q.Lookup<TopographyMainRow> {
            return Q.getLookup<TopographyMainRow>('Configs.TopographyMain');
        }

        export declare const enum Fields {
            TopomainId = "TopomainId",
            TopographyMName = "TopographyMName",
            Icd0Code = "Icd0Code"
        }
    }
}

