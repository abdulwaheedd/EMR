namespace EMR.Configs {
    export interface LkpManufacturerRow {
        ManufacturerId?: number;
        ManufacturerName?: string;
        ManufacturerType?: string;
        CountryId?: number;
        Website?: string;
        Email?: string;
        CellPhoneNo?: string;
    }

    export namespace LkpManufacturerRow {
        export const idProperty = 'ManufacturerId';
        export const nameProperty = 'ManufacturerName';
        export const localTextPrefix = 'Configs.LkpManufacturer';
        export const lookupKey = 'Configs.lkpManufacturer';

        export function getLookup(): Q.Lookup<LkpManufacturerRow> {
            return Q.getLookup<LkpManufacturerRow>('Configs.lkpManufacturer');
        }

        export declare const enum Fields {
            ManufacturerId = "ManufacturerId",
            ManufacturerName = "ManufacturerName",
            ManufacturerType = "ManufacturerType",
            CountryId = "CountryId",
            Website = "Website",
            Email = "Email",
            CellPhoneNo = "CellPhoneNo"
        }
    }
}

