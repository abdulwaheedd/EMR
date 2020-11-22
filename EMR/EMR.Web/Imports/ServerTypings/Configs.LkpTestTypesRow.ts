namespace EMR.Configs {
    export interface LkpTestTypesRow {
        TestTypeId?: number;
        TestTypeName?: string;
    }

    export namespace LkpTestTypesRow {
        export const idProperty = 'TestTypeId';
        export const nameProperty = 'TestTypeName';
        export const localTextPrefix = 'Configs.LkpTestTypes';
        export const lookupKey = 'Configs.LkpTestTypes';

        export function getLookup(): Q.Lookup<LkpTestTypesRow> {
            return Q.getLookup<LkpTestTypesRow>('Configs.LkpTestTypes');
        }

        export declare const enum Fields {
            TestTypeId = "TestTypeId",
            TestTypeName = "TestTypeName"
        }
    }
}

