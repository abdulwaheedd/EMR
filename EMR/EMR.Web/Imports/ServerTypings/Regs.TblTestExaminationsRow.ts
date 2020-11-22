namespace EMR.Regs {
    export interface TblTestExaminationsRow {
        PatTestId?: number;
        EdId?: number;
        AdId?: number;
        TestExaminations?: number;
        Diagnosis?: number;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        TestName?: string;
        DeptName?: string;
        Diagnosisname?: string;
        AdMrid?: number;
    }

    export namespace TblTestExaminationsRow {
        export const idProperty = 'PatTestId';
        export const nameProperty = 'TestName';
        export const localTextPrefix = 'Regs.TblTestExaminations';

        export declare const enum Fields {
            PatTestId = "PatTestId",
            EdId = "EdId",
            AdId = "AdId",
            TestExaminations = "TestExaminations",
            Diagnosis = "Diagnosis",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            TestName = "TestName",
            DeptName = "DeptName",
            Diagnosisname = "Diagnosisname",
            AdMrid = "AdMrid"
        }
    }
}

