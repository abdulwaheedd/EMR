namespace EMR.Regs {
    export interface TblPatientNextOfKeenRow {
        PatNoKid?: number;
        NoKNameD?: string;
        Mrid?: number;
        NoKPhone?: string;
        NoKRelationType?: number;
        NoKAdd?: string;
        LastUpdated?: string;
        UserName?: string;
        TenantId?: number;
        MridFacilityId?: number;
        MridPatName?: string;
        MridPatFatName?: string;
        RelationTypeName?: string;
        MRN?: string;
    }

    export namespace TblPatientNextOfKeenRow {
        export const idProperty = 'PatNoKid';
        export const nameProperty = 'NoKNameD';
        export const localTextPrefix = 'Regs.TblPatientNextOfKeen';

        export declare const enum Fields {
            PatNoKid = "PatNoKid",
            NoKNameD = "NoKNameD",
            Mrid = "Mrid",
            NoKPhone = "NoKPhone",
            NoKRelationType = "NoKRelationType",
            NoKAdd = "NoKAdd",
            LastUpdated = "LastUpdated",
            UserName = "UserName",
            TenantId = "TenantId",
            MridFacilityId = "MridFacilityId",
            MridPatName = "MridPatName",
            MridPatFatName = "MridPatFatName",
            RelationTypeName = "RelationTypeName",
            MRN = "MRN"
        }
    }
}

