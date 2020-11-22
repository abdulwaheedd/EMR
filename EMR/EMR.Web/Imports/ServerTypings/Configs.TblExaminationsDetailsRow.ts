namespace EMR.Configs {
    export interface TblExaminationsDetailsRow {
        Edid?: number;
        DpId?: number;
        EdName?: string;
        DepartmentName?: string;
    }

    export namespace TblExaminationsDetailsRow {
        export const idProperty = 'Edid';
        export const nameProperty = 'EdName';
        export const localTextPrefix = 'Configs.TblExaminationsDetails';
        export const lookupKey = 'Configs.TblExaminationsDetails';

        export function getLookup(): Q.Lookup<TblExaminationsDetailsRow> {
            return Q.getLookup<TblExaminationsDetailsRow>('Configs.TblExaminationsDetails');
        }

        export declare const enum Fields {
            Edid = "Edid",
            DpId = "DpId",
            EdName = "EdName",
            DepartmentName = "DepartmentName"
        }
    }
}

