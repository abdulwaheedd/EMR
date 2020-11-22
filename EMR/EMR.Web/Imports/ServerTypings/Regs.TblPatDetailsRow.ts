namespace EMR.Regs {
    export interface TblPatDetailsRow {
        PdId?: number;
        Mrid?: number;
        ProvinceId?: number;
        DistrictId?: number;
        PatLocation?: string;
        MariId?: number;
        PatPhone?: string;
        Eid?: number;
        Oid?: number;
        PatDdate?: string;
        PatDdateH?: string;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        MridFacilityId?: number;
        MridPatName?: string;
        MridPatFatName?: string;
        MariPatMaritalStatusDari?: string;
        EidEducationDari?: string;
        OidOccupationDari?: string;
        ProvinceDari?: string;
        MRN?: string;
    }

    export namespace TblPatDetailsRow {
        export const idProperty = 'PdId';
        export const nameProperty = 'PatLocation';
        export const localTextPrefix = 'Regs.TblPatDetails';

        export declare const enum Fields {
            PdId = "PdId",
            Mrid = "Mrid",
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            PatLocation = "PatLocation",
            MariId = "MariId",
            PatPhone = "PatPhone",
            Eid = "Eid",
            Oid = "Oid",
            PatDdate = "PatDdate",
            PatDdateH = "PatDdateH",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            MridFacilityId = "MridFacilityId",
            MridPatName = "MridPatName",
            MridPatFatName = "MridPatFatName",
            MariPatMaritalStatusDari = "MariPatMaritalStatusDari",
            EidEducationDari = "EidEducationDari",
            OidOccupationDari = "OidOccupationDari",
            ProvinceDari = "ProvinceDari",
            MRN = "MRN"
        }
    }
}

