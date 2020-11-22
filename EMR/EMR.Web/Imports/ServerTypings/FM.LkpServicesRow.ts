namespace EMR.FM {
    export interface LkpServicesRow {
        ServiceId?: number;
        ServiceTypeId?: number;
        ServiceDari?: string;
        ServicePashto?: string;
        ServiceEn?: string;
        ServicePrice?: number;
        DiscountRate?: number;
        Status?: boolean;
        ServiceTypeServiceTypeDari?: string;
        ServiceTypeServiceTypePashto?: string;
        ServiceTypeServiceTypeEn?: string;
    }

    export namespace LkpServicesRow {
        export const idProperty = 'ServiceId';
        export const nameProperty = 'ServiceDari';
        export const localTextPrefix = 'FM.LkpServices';
        export const lookupKey = 'FM.LkpServices';

        export function getLookup(): Q.Lookup<LkpServicesRow> {
            return Q.getLookup<LkpServicesRow>('FM.LkpServices');
        }

        export declare const enum Fields {
            ServiceId = "ServiceId",
            ServiceTypeId = "ServiceTypeId",
            ServiceDari = "ServiceDari",
            ServicePashto = "ServicePashto",
            ServiceEn = "ServiceEn",
            ServicePrice = "ServicePrice",
            DiscountRate = "DiscountRate",
            Status = "Status",
            ServiceTypeServiceTypeDari = "ServiceTypeServiceTypeDari",
            ServiceTypeServiceTypePashto = "ServiceTypeServiceTypePashto",
            ServiceTypeServiceTypeEn = "ServiceTypeServiceTypeEn"
        }
    }
}

