namespace EMR.Verifications {
    export interface ClabtestsRow {
        Id?: number;
        Mrid?: number;
        VisitId?: number;
        LabTestId?: number;
        Result?: string;
        NormalRange?: string;
        Unit?: string;
        LabDateTime?: string;
        SlabDate?: string;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        LabTestName?: string;
    }

    export namespace ClabtestsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Result';
        export const localTextPrefix = 'Verifications.Clabtests';

        export declare const enum Fields {
            Id = "Id",
            Mrid = "Mrid",
            VisitId = "VisitId",
            LabTestId = "LabTestId",
            Result = "Result",
            NormalRange = "NormalRange",
            Unit = "Unit",
            LabDateTime = "LabDateTime",
            SlabDate = "SlabDate",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            LabTestName = "LabTestName"
        }
    }
}

