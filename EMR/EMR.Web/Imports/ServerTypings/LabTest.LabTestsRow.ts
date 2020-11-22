namespace EMR.LabTest {
    export interface LabTestsRow {
        Id?: number;
        VisitId?: number;
        LabTestId?: number;
        Result?: string;
        NormalRange?: string;
        Unit?: string;
        UserId?: number;
        Updated?: string;
        LabDateTime?: string;
        SlabDate?: string;
        TestTypeId?: number;
        VisitMrid?: number;
        LabTestName?: string;
        TestTypeName?: string;
    }

    export namespace LabTestsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Result';
        export const localTextPrefix = 'LabTest.LabTests';

        export declare const enum Fields {
            Id = "Id",
            VisitId = "VisitId",
            LabTestId = "LabTestId",
            Result = "Result",
            NormalRange = "NormalRange",
            Unit = "Unit",
            UserId = "UserId",
            Updated = "Updated",
            LabDateTime = "LabDateTime",
            SlabDate = "SlabDate",
            TestTypeId = "TestTypeId",
            VisitMrid = "VisitMrid",
            LabTestName = "LabTestName",
            TestTypeName = "TestTypeName"
        }
    }
}

