namespace EMR.Locations {
    export interface ProvincesRow {
        ProvinceId?: number;
        ProvinceEng?: string;
        ProvinceDari?: string;
        ProvPop?: number;
        ProvincePashto?: string;
        ProvinceAbbrv?: string;
        ProvinceName?: string;
    }

    export namespace ProvincesRow {
        export const idProperty = 'ProvinceId';
        export const nameProperty = 'ProvinceName';
        export const localTextPrefix = 'Locations.Provinces';
        export const lookupKey = 'Locations.Provinces';

        export function getLookup(): Q.Lookup<ProvincesRow> {
            return Q.getLookup<ProvincesRow>('Locations.Provinces');
        }

        export declare const enum Fields {
            ProvinceId = "ProvinceId",
            ProvinceEng = "ProvinceEng",
            ProvinceDari = "ProvinceDari",
            ProvPop = "ProvPop",
            ProvincePashto = "ProvincePashto",
            ProvinceAbbrv = "ProvinceAbbrv",
            ProvinceName = "ProvinceName"
        }
    }
}

