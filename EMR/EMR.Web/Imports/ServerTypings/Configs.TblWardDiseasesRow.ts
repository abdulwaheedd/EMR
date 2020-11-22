namespace EMR.Configs {
    export interface TblWardDiseasesRow {
        WId?: number;
        WardCode?: number;
        DiseasesCategory?: string;
        DiseasesCat?: number;
        DiseasesName?: string;
        DiseaseDariName?: string;
        DiseasesCode?: string;
        HmirCode?: string;
        HmirCodeId?: number;
        Status?: number;
        WvId?: number;
        DiseaseName?: string;
    }

    export namespace TblWardDiseasesRow {
        export const idProperty = 'WId';
        export const nameProperty = 'DiseaseName';
        export const localTextPrefix = 'Configs.TblWardDiseases';
        export const lookupKey = 'Configs.TblWardDiseases';

        export function getLookup(): Q.Lookup<TblWardDiseasesRow> {
            return Q.getLookup<TblWardDiseasesRow>('Configs.TblWardDiseases');
        }

        export declare const enum Fields {
            WId = "WId",
            WardCode = "WardCode",
            DiseasesCategory = "DiseasesCategory",
            DiseasesCat = "DiseasesCat",
            DiseasesName = "DiseasesName",
            DiseaseDariName = "DiseaseDariName",
            DiseasesCode = "DiseasesCode",
            HmirCode = "HmirCode",
            HmirCodeId = "HmirCodeId",
            Status = "Status",
            WvId = "WvId",
            DiseaseName = "DiseaseName"
        }
    }
}

