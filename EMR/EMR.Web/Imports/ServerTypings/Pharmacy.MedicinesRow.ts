namespace EMR.Pharmacy {
    export interface MedicinesRow {
        MedicineId?: number;
        BrandName?: string;
        GenericName?: string;
        FormId?: number;
        Strength?: string;
        Quantity?: number;
        UnitPrice?: number;
        ExpiryDate?: string;
        Mid?: number;
        Vid?: number;
        InDate?: string;
        ReorderLevel?: number;
        QuantityUsed?: number;
        Discontinue?: boolean;
        BatchNo?: string;
        SExpiryDate?: string;
        SInDate?: string;
        FormFormName?: string;
        MidManufacturerName?: string;
        VidVendorName?: string;
        MedicineName?: string;
        DaysToExpire?: number;
        Balance?: number;
        UserId?: number;
        Updated?: string;
    }

    export namespace MedicinesRow {
        export const idProperty = 'MedicineId';
        export const nameProperty = 'MedicineName';
        export const localTextPrefix = 'Pharmacy.Medicines';
        export const lookupKey = 'Pharmacy.Medicines';

        export function getLookup(): Q.Lookup<MedicinesRow> {
            return Q.getLookup<MedicinesRow>('Pharmacy.Medicines');
        }

        export declare const enum Fields {
            MedicineId = "MedicineId",
            BrandName = "BrandName",
            GenericName = "GenericName",
            FormId = "FormId",
            Strength = "Strength",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            ExpiryDate = "ExpiryDate",
            Mid = "Mid",
            Vid = "Vid",
            InDate = "InDate",
            ReorderLevel = "ReorderLevel",
            QuantityUsed = "QuantityUsed",
            Discontinue = "Discontinue",
            BatchNo = "BatchNo",
            SExpiryDate = "SExpiryDate",
            SInDate = "SInDate",
            FormFormName = "FormFormName",
            MidManufacturerName = "MidManufacturerName",
            VidVendorName = "VidVendorName",
            MedicineName = "MedicineName",
            DaysToExpire = "DaysToExpire",
            Balance = "Balance",
            UserId = "UserId",
            Updated = "Updated"
        }
    }
}

