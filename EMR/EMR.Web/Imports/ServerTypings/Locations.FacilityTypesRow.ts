namespace EMR.Locations {
    export interface FacilityTypesRow {
        FacTypeCode?: number;
        FacType?: string;
        FacTypeDari?: string;
        FacTypePashto?: string;
    }

    export namespace FacilityTypesRow {
        export const idProperty = 'FacTypeCode';
        export const nameProperty = 'FacType';
        export const localTextPrefix = 'Locations.FacilityTypes';
        export const lookupKey = 'Locations.FacilityTypes';

        export function getLookup(): Q.Lookup<FacilityTypesRow> {
            return Q.getLookup<FacilityTypesRow>('Locations.FacilityTypes');
        }

        export declare const enum Fields {
            FacTypeCode = "FacTypeCode",
            FacType = "FacType",
            FacTypeDari = "FacTypeDari",
            FacTypePashto = "FacTypePashto"
        }
    }
}

