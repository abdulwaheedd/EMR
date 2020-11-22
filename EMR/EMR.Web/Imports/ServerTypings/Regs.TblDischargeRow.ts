namespace EMR.Regs {
    export interface TblDischargeRow {
        DisId?: number;
        Mrid?: number;
        Wardid?: number;
        DisDiagnosis?: string;
        DisDate?: string;
        DisDateH?: string;
        DisStatus?: string;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        DisDiagResult?: number;
        MRN?: string;
    }

    export namespace TblDischargeRow {
        export const idProperty = 'DisId';
        export const nameProperty = 'DisDiagnosis';
        export const localTextPrefix = 'Regs.TblDischarge';

        export declare const enum Fields {
            DisId = "DisId",
            Mrid = "Mrid",
            Wardid = "Wardid",
            DisDiagnosis = "DisDiagnosis",
            DisDate = "DisDate",
            DisDateH = "DisDateH",
            DisStatus = "DisStatus",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            DisDiagResult = "DisDiagResult",
            MRN = "MRN"
        }
    }
}

