namespace EMR.OPD {
    export interface VitalSignsRow {
        VitalId?: number;
        VisitId?: number;
        Pulse?: number;
        Rr?: number;
        Temp?: number;
        Bp?: string;
        Weight?: number;
        Height?: number;
        Hr?: number;
        O2?: number;
        Pain?: number;
        UserId?: number;
        Updated?: string;
        VitalDateTime?: string;
        SVitalDate?: string;
    }

    export namespace VitalSignsRow {
        export const idProperty = 'VitalId';
        export const nameProperty = 'Bp';
        export const localTextPrefix = 'OPD.VitalSigns';

        export declare const enum Fields {
            VitalId = "VitalId",
            VisitId = "VisitId",
            Pulse = "Pulse",
            Rr = "Rr",
            Temp = "Temp",
            Bp = "Bp",
            Weight = "Weight",
            Height = "Height",
            Hr = "Hr",
            O2 = "O2",
            Pain = "Pain",
            UserId = "UserId",
            Updated = "Updated",
            VitalDateTime = "VitalDateTime",
            SVitalDate = "SVitalDate"
        }
    }
}

