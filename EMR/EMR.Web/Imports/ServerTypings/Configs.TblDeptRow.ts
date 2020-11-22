namespace EMR.Configs {
    export interface TblDeptRow {
        DpId?: number;
        DeptName?: string;
        DeptNameD?: string;
        DeptNameP?: string;
    }

    export namespace TblDeptRow {
        export const idProperty = 'DpId';
        export const nameProperty = 'DeptName';
        export const localTextPrefix = 'Configs.TblDept';
        export const lookupKey = 'Configs.TblDept';

        export function getLookup(): Q.Lookup<TblDeptRow> {
            return Q.getLookup<TblDeptRow>('Configs.TblDept');
        }

        export declare const enum Fields {
            DpId = "DpId",
            DeptName = "DeptName",
            DeptNameD = "DeptNameD",
            DeptNameP = "DeptNameP"
        }
    }
}

