namespace EMR.Configs {
    export interface TopographySubRow {
        ToposubId?: number;
        Icd0Code?: number;
        TopographySName?: string;
        TopomainId?: number;
        TopomainTopographyMName?: string;
        TopomainIcd0Code?: string;
    }

    export namespace TopographySubRow {
        export const idProperty = 'ToposubId';
        export const nameProperty = 'TopographySName';
        export const localTextPrefix = 'Configs.TopographySub';
        export const lookupKey = 'Configs.TopographySub';

        export function getLookup(): Q.Lookup<TopographySubRow> {
            return Q.getLookup<TopographySubRow>('Configs.TopographySub');
        }

        export declare const enum Fields {
            ToposubId = "ToposubId",
            Icd0Code = "Icd0Code",
            TopographySName = "TopographySName",
            TopomainId = "TopomainId",
            TopomainTopographyMName = "TopomainTopographyMName",
            TopomainIcd0Code = "TopomainIcd0Code"
        }
    }
}

