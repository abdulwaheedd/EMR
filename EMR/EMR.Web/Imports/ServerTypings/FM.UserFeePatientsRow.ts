namespace EMR.FM {
    export interface UserFeePatientsRow {
        Mrid?: number;
        Mrn?: string;
        FacilityId?: number;
        PatName?: string;
        PatFatName?: string;
        PatRealationName?: string;
        PatHusbandName?: string;
        PatGender?: number;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        Gender?: string;
        FacilityFacilityNameDari?: string;
    }

    export namespace UserFeePatientsRow {
        export const idProperty = 'Mrid';
        export const nameProperty = 'Mrn';
        export const localTextPrefix = 'FM.UserFeePatients';

        export declare const enum Fields {
            Mrid = "Mrid",
            Mrn = "Mrn",
            FacilityId = "FacilityId",
            PatName = "PatName",
            PatFatName = "PatFatName",
            PatRealationName = "PatRealationName",
            PatHusbandName = "PatHusbandName",
            PatGender = "PatGender",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            Gender = "Gender",
            FacilityFacilityNameDari = "FacilityFacilityNameDari"
        }
    }
}

