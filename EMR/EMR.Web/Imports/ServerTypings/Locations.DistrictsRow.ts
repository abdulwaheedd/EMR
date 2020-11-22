namespace EMR.Locations {
    export interface DistrictsRow {
        ProvinceId?: number;
        DistrictId?: number;
        DistrictEng?: string;
        DistrictDari?: string;
        DistrictPashto?: string;
        ProvinceEng?: string;
        ProvinceDari?: string;
        ProvincePashto?: string;
        DistrictName?: string;
    }

    export namespace DistrictsRow {
        export const idProperty = 'DistrictId';
        export const nameProperty = 'DistrictName';
        export const localTextPrefix = 'Locations.Districts';
        export const lookupKey = 'Locations.Districts';

        export function getLookup(): Q.Lookup<DistrictsRow> {
            return Q.getLookup<DistrictsRow>('Locations.Districts');
        }

        export declare const enum Fields {
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            DistrictEng = "DistrictEng",
            DistrictDari = "DistrictDari",
            DistrictPashto = "DistrictPashto",
            ProvinceEng = "ProvinceEng",
            ProvinceDari = "ProvinceDari",
            ProvincePashto = "ProvincePashto",
            DistrictName = "DistrictName"
        }
    }
}

