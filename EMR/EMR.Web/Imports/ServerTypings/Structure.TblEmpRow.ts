namespace EMR.Structure {
    export interface TblEmpRow {
        EmId?: number;
        EmpName?: string;
        EmpNameD?: string;
        EmpFatherName?: string;
        EmpFatherNameD?: string;
        EmpLastName?: string;
        EmpLastNameD?: string;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
    }

    export namespace TblEmpRow {
        export const idProperty = 'EmId';
        export const nameProperty = 'EmpName';
        export const localTextPrefix = 'Structure.TblEmp';

        export declare const enum Fields {
            EmId = "EmId",
            EmpName = "EmpName",
            EmpNameD = "EmpNameD",
            EmpFatherName = "EmpFatherName",
            EmpFatherNameD = "EmpFatherNameD",
            EmpLastName = "EmpLastName",
            EmpLastNameD = "EmpLastNameD",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId"
        }
    }
}

