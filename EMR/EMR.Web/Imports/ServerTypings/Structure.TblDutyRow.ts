namespace EMR.Structure {
    export interface TblDutyRow {
        DutId?: number;
        EmpId?: string;
        WardId?: number;
        DutYear?: number;
        DutMonth?: number;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
    }

    export namespace TblDutyRow {
        export const idProperty = 'DutId';
        export const nameProperty = 'EmpId';
        export const localTextPrefix = 'Structure.TblDuty';

        export declare const enum Fields {
            DutId = "DutId",
            EmpId = "EmpId",
            WardId = "WardId",
            DutYear = "DutYear",
            DutMonth = "DutMonth",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId"
        }
    }
}

