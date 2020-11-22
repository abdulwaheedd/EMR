namespace EMR.Configs {
    export interface LkpVendorRow {
        VendorId?: number;
        VendorName?: string;
        VendorType?: string;
        VendorRegNo?: number;
        Email?: string;
        CellPhoneNo?: string;
    }

    export namespace LkpVendorRow {
        export const idProperty = 'VendorId';
        export const nameProperty = 'VendorName';
        export const localTextPrefix = 'Configs.LkpVendor';
        export const lookupKey = 'Configs.lkpVendor';

        export function getLookup(): Q.Lookup<LkpVendorRow> {
            return Q.getLookup<LkpVendorRow>('Configs.lkpVendor');
        }

        export declare const enum Fields {
            VendorId = "VendorId",
            VendorName = "VendorName",
            VendorType = "VendorType",
            VendorRegNo = "VendorRegNo",
            Email = "Email",
            CellPhoneNo = "CellPhoneNo"
        }
    }
}

