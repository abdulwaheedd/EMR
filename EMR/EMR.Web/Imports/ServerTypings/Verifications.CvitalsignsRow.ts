namespace EMR.Verifications {
    export interface CvitalsignsRow {
        VitalId?: number;
        Mrid?: number;
        VisitId?: number;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        Pulse?: number;
        Rr?: number;
        Temp?: number;
        Bp?: string;
        Weight?: number;
        Height?: number;
        Hr?: number;
        O2?: number;
        Pain?: number;
        VitalDateTime?: string;
        SVitalDate?: string;
    }

    export namespace CvitalsignsRow {
        export const idProperty = 'Mrid';
        export const nameProperty = 'SDateOfVisit';
        export const localTextPrefix = 'Verifications.Cvitalsigns';

        export declare const enum Fields {
            VitalId = "VitalId",
            Mrid = "Mrid",
            VisitId = "VisitId",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            Pulse = "Pulse",
            Rr = "Rr",
            Temp = "Temp",
            Bp = "Bp",
            Weight = "Weight",
            Height = "Height",
            Hr = "Hr",
            O2 = "O2",
            Pain = "Pain",
            VitalDateTime = "VitalDateTime",
            SVitalDate = "SVitalDate"
        }
    }
}

