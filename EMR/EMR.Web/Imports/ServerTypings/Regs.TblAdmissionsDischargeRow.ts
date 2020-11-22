namespace EMR.Regs {
    export interface TblAdmissionsDischargeRow {
        AdId?: number;
        Mrid?: number;
        Wardid?: number;
        AdDiagnosis?: number;
        AdDate?: string;
        AdDateH?: string;
        AdAge?: number;
        AdAgeType?: number;
        AdCaseType?: number;
        AdCaseTypeName?: string;
        DisDiagCausDeath?: number;
        DisDateH?: string;
        DisDate?: string;
        DisStatus?: number;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        DisDiagResult?: number;
        AbortionType?: number;
        MridFacilityId?: number;
        MridPatName?: string;
        AdAgeTypeName?: string;
        MridPatFatName?: string;
        WardidWardName?: string;
        WardidWardNameD?: string;
        AbortionTypeName?: string;
        MRN?: string;
    }

    export namespace TblAdmissionsDischargeRow {
        export const idProperty = 'AdId';
        export const nameProperty = 'AdDateH';
        export const localTextPrefix = 'Regs.TblAdmissionsDischarge';

        export declare const enum Fields {
            AdId = "AdId",
            Mrid = "Mrid",
            Wardid = "Wardid",
            AdDiagnosis = "AdDiagnosis",
            AdDate = "AdDate",
            AdDateH = "AdDateH",
            AdAge = "AdAge",
            AdAgeType = "AdAgeType",
            AdCaseType = "AdCaseType",
            AdCaseTypeName = "AdCaseTypeName",
            DisDiagCausDeath = "DisDiagCausDeath",
            DisDateH = "DisDateH",
            DisDate = "DisDate",
            DisStatus = "DisStatus",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            DisDiagResult = "DisDiagResult",
            AbortionType = "AbortionType",
            MridFacilityId = "MridFacilityId",
            MridPatName = "MridPatName",
            AdAgeTypeName = "AdAgeTypeName",
            MridPatFatName = "MridPatFatName",
            WardidWardName = "WardidWardName",
            WardidWardNameD = "WardidWardNameD",
            AbortionTypeName = "AbortionTypeName",
            MRN = "MRN"
        }
    }
}

