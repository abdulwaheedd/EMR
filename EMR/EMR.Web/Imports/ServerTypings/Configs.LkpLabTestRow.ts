namespace EMR.Configs {
    export interface LkpLabTestRow {
        LabTestId?: number;
        LabTestName?: string;
        SubTypeTestId?: number;
        NormalRange?: string;
        TestPrice?: number;
        Unit?: string;
        TestTypeName?: string;
    }

    export namespace LkpLabTestRow {
        export const idProperty = 'LabTestId';
        export const nameProperty = 'LabTestName';
        export const localTextPrefix = 'Configs.LkpLabTest';
        export const lookupKey = 'Configs.lkpLabTest';

        export function getLookup(): Q.Lookup<LkpLabTestRow> {
            return Q.getLookup<LkpLabTestRow>('Configs.lkpLabTest');
        }

        export declare const enum Fields {
            LabTestId = "LabTestId",
            LabTestName = "LabTestName",
            SubTypeTestId = "SubTypeTestId",
            NormalRange = "NormalRange",
            TestPrice = "TestPrice",
            Unit = "Unit",
            TestTypeName = "TestTypeName"
        }
    }
}

