namespace EMR.Register {
    export interface RegvisitsRow {
        VisitId?: number;
        Mrid?: number;
        OccupationId?: number;
        MaritalStatusId?: number;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        PhoneNumber?: string;
        ProvinceId?: number;
        DistrictId?: number;
        Location?: string;
        UserId?: number;
        Updated?: string;
        TypeofvisitId?: number;
        DurationOfStay?: number;
        OccupationName?: string;
        MaritalStatusName?: string;
        ProvinceName?: string;
        DistrictName?: string;
        MRN?: string;
        Typeofvisit?: string;
        CycleId?: number;
    }

    export namespace RegvisitsRow {
        export const idProperty = 'VisitId';
        export const nameProperty = 'PhoneNumber';
        export const localTextPrefix = 'Register.Regvisits';

        export declare const enum Fields {
            VisitId = "VisitId",
            Mrid = "Mrid",
            OccupationId = "OccupationId",
            MaritalStatusId = "MaritalStatusId",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            PhoneNumber = "PhoneNumber",
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            Location = "Location",
            UserId = "UserId",
            Updated = "Updated",
            TypeofvisitId = "TypeofvisitId",
            DurationOfStay = "DurationOfStay",
            OccupationName = "OccupationName",
            MaritalStatusName = "MaritalStatusName",
            ProvinceName = "ProvinceName",
            DistrictName = "DistrictName",
            MRN = "MRN",
            Typeofvisit = "Typeofvisit",
            CycleId = "CycleId"
        }
    }
}

