namespace EMR.Configs {
    export interface TblEducationRow {
        Eid?: number;
        EducationDari?: string;
        EducationEng?: string;
        EducationName?: string;
    }

    export namespace TblEducationRow {
        export const idProperty = 'Eid';
        export const nameProperty = 'EducationName';
        export const localTextPrefix = 'Configs.TblEducation';
        export const lookupKey = 'Configs.TblEducation';

        export function getLookup(): Q.Lookup<TblEducationRow> {
            return Q.getLookup<TblEducationRow>('Configs.TblEducation');
        }

        export declare const enum Fields {
            Eid = "Eid",
            EducationDari = "EducationDari",
            EducationEng = "EducationEng",
            EducationName = "EducationName"
        }
    }
}

