﻿namespace EMR.LabTest {
    export interface LabvisitsRow {
        VisitId?: number;
        Mrid?: number;
        OccupationId?: number;
        MaritalStatusId?: number;
        DateOfVisit?: string;
        PhoneNumber?: string;
        ProvinceId?: number;
        DistrictId?: number;
        Location?: string;
        UserId?: number;
        Updated?: string;
        TypeofvisitId?: number;
        OccupationName?: string;
        MaritalStatusName?: string;
        ProvinceName?: string;
        DistrictName?: string;
        MRN?: string;
        Typeofvisit?: string;
        CycleId?: number;
    }

    export namespace LabvisitsRow {
        export const idProperty = 'VisitId';
        export const nameProperty = 'PhoneNumber';
        export const localTextPrefix = 'LabTest.Labvisits';

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
            UserId = "UserId",
            Updated = "Updated",
            TypeofvisitId = "TypeofvisitId",
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

