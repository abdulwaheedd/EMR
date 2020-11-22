namespace EMR.FM {
    export interface LkpServiceTypesRow {
        ServiceTypeId?: number;
        ServiceTypeDari?: string;
        ServiceTypePashto?: string;
        ServiceTypeEn?: string;
        ServiceType?: string;
    }

    export namespace LkpServiceTypesRow {
        export const idProperty = 'ServiceTypeId';
        export const nameProperty = 'ServiceTypeDari';
        export const localTextPrefix = 'FM.LkpServiceTypes';
        export const lookupKey = 'FM.LkpServiceTypes';

        export function getLookup(): Q.Lookup<LkpServiceTypesRow> {
            return Q.getLookup<LkpServiceTypesRow>('FM.LkpServiceTypes');
        }

        export declare const enum Fields {
            ServiceTypeId = "ServiceTypeId",
            ServiceTypeDari = "ServiceTypeDari",
            ServiceTypePashto = "ServiceTypePashto",
            ServiceTypeEn = "ServiceTypeEn",
            ServiceType = "ServiceType"
        }
    }
}

