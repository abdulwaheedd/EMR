namespace EMR.Configs {
    export interface TblDiseasesCategoryRow {
        Id?: number;
        Wardid?: number;
        DiseasesCategory?: string;
        DiseasesCatDari?: string;
        DiseasesCatPashto?: string;
    }

    export namespace TblDiseasesCategoryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DiseasesCategory';
        export const localTextPrefix = 'Configs.TblDiseasesCategory';

        export declare const enum Fields {
            Id = "Id",
            Wardid = "Wardid",
            DiseasesCategory = "DiseasesCategory",
            DiseasesCatDari = "DiseasesCatDari",
            DiseasesCatPashto = "DiseasesCatPashto"
        }
    }
}

