namespace EMR.Pharmacy {
    export interface MedicinelossesRow {
        Id?: number;
        MedicineId?: number;
        Quantity?: number;
        OutDate?: string;
        LosstypeId?: number;
        UserId?: number;
        Updated?: string;
        MedicineBrandName?: string;
        MedicineGenericName?: string;
        MedicineFormId?: number;
        MedicineQuantity?: number;
        MedicineUnitPrice?: number;
        MedicineExpiryDate?: string;
        MedicineMid?: number;
        MedicineVid?: number;
        MedicineInDate?: string;
        MedicineReorderLevel?: number;
        MedicineQuantityUsed?: number;
        MedicineDiscontinue?: boolean;
        MedicineUserId?: number;
        MedicineUpdated?: string;
        MedicineBatchNo?: string;
        MedicineStrength?: string;
        MedicineSExpiryDate?: string;
        MedicineSInDate?: string;
        LosstypeName?: string;
    }

    export namespace MedicinelossesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Pharmacy.Medicinelosses';

        export declare const enum Fields {
            Id = "Id",
            MedicineId = "MedicineId",
            Quantity = "Quantity",
            OutDate = "OutDate",
            LosstypeId = "LosstypeId",
            UserId = "UserId",
            Updated = "Updated",
            MedicineBrandName = "MedicineBrandName",
            MedicineGenericName = "MedicineGenericName",
            MedicineFormId = "MedicineFormId",
            MedicineQuantity = "MedicineQuantity",
            MedicineUnitPrice = "MedicineUnitPrice",
            MedicineExpiryDate = "MedicineExpiryDate",
            MedicineMid = "MedicineMid",
            MedicineVid = "MedicineVid",
            MedicineInDate = "MedicineInDate",
            MedicineReorderLevel = "MedicineReorderLevel",
            MedicineQuantityUsed = "MedicineQuantityUsed",
            MedicineDiscontinue = "MedicineDiscontinue",
            MedicineUserId = "MedicineUserId",
            MedicineUpdated = "MedicineUpdated",
            MedicineBatchNo = "MedicineBatchNo",
            MedicineStrength = "MedicineStrength",
            MedicineSExpiryDate = "MedicineSExpiryDate",
            MedicineSInDate = "MedicineSInDate",
            LosstypeName = "LosstypeName"
        }
    }
}

