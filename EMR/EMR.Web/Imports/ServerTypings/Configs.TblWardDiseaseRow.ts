namespace EMR.Configs {
    export interface TblWardDiseaseRow {
        WId?: number;
        WardCode?: number;
        DiagnosisTreatment?: number;
        DiseasesCategory?: string;
        DiseasesCat?: number;
        DiseasesName?: string;
        DiseaseDariName?: string;
        DiseasesCode?: string;
        HmirCode?: string;
        HmirCodeId?: number;
        Status?: number;
    }

    export namespace TblWardDiseaseRow {
        export const idProperty = 'WId';
        export const nameProperty = 'DiseaseDariName';
        export const localTextPrefix = 'Configs.TblWardDisease';
        export const lookupKey = 'Configs.TblWardDisease';

        export function getLookup(): Q.Lookup<TblWardDiseaseRow> {
            return Q.getLookup<TblWardDiseaseRow>('Configs.TblWardDisease');
        }

        export declare const enum Fields {
            WId = "WId",
            WardCode = "WardCode",
            DiagnosisTreatment = "DiagnosisTreatment",
            DiseasesCategory = "DiseasesCategory",
            DiseasesCat = "DiseasesCat",
            DiseasesName = "DiseasesName",
            DiseaseDariName = "DiseaseDariName",
            DiseasesCode = "DiseasesCode",
            HmirCode = "HmirCode",
            HmirCodeId = "HmirCodeId",
            Status = "Status"
        }
    }
}

