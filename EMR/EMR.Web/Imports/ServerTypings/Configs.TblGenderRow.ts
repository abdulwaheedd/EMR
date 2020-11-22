namespace EMR.Configs {
    export interface TblGenderRow {
        GenderId?: number;
        GenderEng?: string;
        GenderDa?: string;
        GenderPs?: string;
        Gender?: string;
    }

    export namespace TblGenderRow {
        export const idProperty = 'GenderId';
        export const nameProperty = 'Gender';
        export const localTextPrefix = 'Configs.TblGender';
        export const lookupKey = 'Conigs.TblGender';

        export function getLookup(): Q.Lookup<TblGenderRow> {
            return Q.getLookup<TblGenderRow>('Conigs.TblGender');
        }

        export declare const enum Fields {
            GenderId = "GenderId",
            GenderEng = "GenderEng",
            GenderDa = "GenderDa",
            GenderPs = "GenderPs",
            Gender = "Gender"
        }
    }
}

