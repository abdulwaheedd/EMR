namespace EMR.Regs {
    export interface TblOperationsRow {
        Evid?: number;
        Wvid?: number;
        WardId?: number;
        AdId?: number;
        AdValue?: number;
        Remarks?: string;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        WvidWrdid?: number;
        WvidDiagnTreatComp?: number;
        WvidVarNameEnglish?: string;
        WvidVarNameDari?: string;
        WvidVarNamePashto?: string;
        WvidVarSpecification?: string;
        AdMrid?: number;
        Wardname?: string;
        DiseaseName?: string;
    }

    export namespace TblOperationsRow {
        export const idProperty = 'Evid';
        export const nameProperty = 'Remarks';
        export const localTextPrefix = 'Regs.TblOperations';

        export declare const enum Fields {
            Evid = "Evid",
            Wvid = "Wvid",
            WardId = "WardId",
            AdId = "AdId",
            AdValue = "AdValue",
            Remarks = "Remarks",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            WvidWrdid = "WvidWrdid",
            WvidDiagnTreatComp = "WvidDiagnTreatComp",
            WvidVarNameEnglish = "WvidVarNameEnglish",
            WvidVarNameDari = "WvidVarNameDari",
            WvidVarNamePashto = "WvidVarNamePashto",
            WvidVarSpecification = "WvidVarSpecification",
            AdMrid = "AdMrid",
            Wardname = "Wardname",
            DiseaseName = "DiseaseName"
        }
    }
}

