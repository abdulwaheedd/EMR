namespace EMR.Regs {
    export interface TblPatientsRow {
        Mrid?: number;
        FacilityId?: number;
        PatName?: string;
        PatFatName?: string;
        PatRealationName?: string;
        PatGender?: number;
        PatHusbandName?: string;
        PatTazkera?: string;
        PatBlooldGroup?: number;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        FacilityFacilityName?: string;
        FacilityFacilityNameDari?: string;
        FacilityFacilityNamePashto?: string;
        FacilityFacilityType?: number;
        MRN?: string;
        Gender?: string;
        BloodGroup?: string;
    }

    export namespace TblPatientsRow {
        export const idProperty = 'Mrid';
        export const nameProperty = 'PatName';
        export const localTextPrefix = 'Regs.TblPatients';
        export const lookupKey = 'Regs.TblPatients';

        export function getLookup(): Q.Lookup<TblPatientsRow> {
            return Q.getLookup<TblPatientsRow>('Regs.TblPatients');
        }

        export declare const enum Fields {
            Mrid = "Mrid",
            FacilityId = "FacilityId",
            PatName = "PatName",
            PatFatName = "PatFatName",
            PatRealationName = "PatRealationName",
            PatGender = "PatGender",
            PatHusbandName = "PatHusbandName",
            PatTazkera = "PatTazkera",
            PatBlooldGroup = "PatBlooldGroup",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            FacilityFacilityName = "FacilityFacilityName",
            FacilityFacilityNameDari = "FacilityFacilityNameDari",
            FacilityFacilityNamePashto = "FacilityFacilityNamePashto",
            FacilityFacilityType = "FacilityFacilityType",
            MRN = "MRN",
            Gender = "Gender",
            BloodGroup = "BloodGroup"
        }
    }
}

