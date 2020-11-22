namespace EMR.Verifications {
    export interface CvisitsRow {
        VisitId?: number;
        Mrid?: number;
        OccupationId?: number;
        MaritalStatusId?: number;
        DateOfVisit?: string;
        PhoneNumber?: string;
        ProvinceId?: number;
        DistrictId?: number;
        Location?: string;
        SDateOfVisit?: string;
        TypeofvisitId?: number;
        OccupationName?: string;
        MaritalStatusName?: string;
        ProvinceName?: string;
        DistrictName?: string;
        MRN?: string;
        Typeofvisit?: string;
    }

    export namespace CvisitsRow {
        export const idProperty = 'VisitId';
        export const nameProperty = 'PhoneNumber';
        export const localTextPrefix = 'Verifications.Cvisits';

        export declare const enum Fields {
            VisitId = "VisitId",
            Mrid = "Mrid",
            OccupationId = "OccupationId",
            MaritalStatusId = "MaritalStatusId",
            DateOfVisit = "DateOfVisit",
            PhoneNumber = "PhoneNumber",
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            Location = "Location",
            SDateOfVisit = "SDateOfVisit",
            TypeofvisitId = "TypeofvisitId",
            OccupationName = "OccupationName",
            MaritalStatusName = "MaritalStatusName",
            ProvinceName = "ProvinceName",
            DistrictName = "DistrictName",
            MRN = "MRN",
            Typeofvisit = "Typeofvisit"
        }
    }
}

