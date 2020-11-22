namespace EMR.Configs {
    export interface TblAgeTypesRow {
        AgetypeId?: number;
        AgeTypeNameEn?: string;
        AgeTypeNameDari?: string;
        AgeTypeNamePashto?: string;
        AgeTypeName?: string;
    }

    export namespace TblAgeTypesRow {
        export const idProperty = 'AgetypeId';
        export const nameProperty = 'AgeTypeName';
        export const localTextPrefix = 'Configs.TblAgeTypes';
        export const lookupKey = 'Configs.TblAgeTypes';

        export function getLookup(): Q.Lookup<TblAgeTypesRow> {
            return Q.getLookup<TblAgeTypesRow>('Configs.TblAgeTypes');
        }

        export declare const enum Fields {
            AgetypeId = "AgetypeId",
            AgeTypeNameEn = "AgeTypeNameEn",
            AgeTypeNameDari = "AgeTypeNameDari",
            AgeTypeNamePashto = "AgeTypeNamePashto",
            AgeTypeName = "AgeTypeName"
        }
    }
}

