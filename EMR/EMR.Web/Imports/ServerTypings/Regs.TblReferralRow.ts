namespace EMR.Regs {
    export interface TblReferralRow {
        RefId?: number;
        AdId?: number;
        FacilityId?: number;
        WardId?: number;
        RefDiagnosis?: number;
        RefDate?: string;
        RefDateH?: string;
        RefType?: number;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        WardName?: string;
        DiseaseName?: string;
        FacilityName?: string;
        AdMrid?: number;
    }

    export namespace TblReferralRow {
        export const idProperty = 'RefId';
        export const nameProperty = 'DiseaseName';
        export const localTextPrefix = 'Regs.TblReferral';

        export declare const enum Fields {
            RefId = "RefId",
            AdId = "AdId",
            FacilityId = "FacilityId",
            WardId = "WardId",
            RefDiagnosis = "RefDiagnosis",
            RefDate = "RefDate",
            RefDateH = "RefDateH",
            RefType = "RefType",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            WardName = "WardName",
            DiseaseName = "DiseaseName",
            FacilityName = "FacilityName",
            AdMrid = "AdMrid"
        }
    }
}

