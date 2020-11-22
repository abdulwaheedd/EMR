namespace EMR.Configs {
    export interface TblPositionsRow {
        PosId?: number;
        EmpId?: string;
        DeptId?: number;
        ProId?: number;
        PosDate?: string;
        PosDateH?: string;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
    }

    export namespace TblPositionsRow {
        export const idProperty = 'PosId';
        export const nameProperty = 'EmpId';
        export const localTextPrefix = 'Configs.TblPositions';

        export declare const enum Fields {
            PosId = "PosId",
            EmpId = "EmpId",
            DeptId = "DeptId",
            ProId = "ProId",
            PosDate = "PosDate",
            PosDateH = "PosDateH",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId"
        }
    }
}

