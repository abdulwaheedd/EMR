namespace EMR.Configs {
    export interface CaretypesRow {
        Id?: number;
        Caretype?: string;
    }

    export namespace CaretypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caretype';
        export const localTextPrefix = 'Configs.Caretypes';
        export const lookupKey = 'Configs.lkpCaretypes';

        export function getLookup(): Q.Lookup<CaretypesRow> {
            return Q.getLookup<CaretypesRow>('Configs.lkpCaretypes');
        }

        export declare const enum Fields {
            Id = "Id",
            Caretype = "Caretype"
        }
    }
}

