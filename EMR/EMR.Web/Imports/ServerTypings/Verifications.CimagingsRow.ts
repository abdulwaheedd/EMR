namespace EMR.Verifications {
    export interface CimagingsRow {
        Id?: number;
        Mrid?: number;
        VisitId?: number;
        ImagingId?: number;
        TestImage?: string;
        Note?: string;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        ImagingName?: string;
    }

    export namespace CimagingsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TestImage';
        export const localTextPrefix = 'Verifications.Cimagings';

        export declare const enum Fields {
            Id = "Id",
            Mrid = "Mrid",
            VisitId = "VisitId",
            ImagingId = "ImagingId",
            TestImage = "TestImage",
            Note = "Note",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            ImagingName = "ImagingName"
        }
    }
}

