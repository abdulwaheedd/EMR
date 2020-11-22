namespace EMR.Pharmacy {
    export interface MedPrescriptionsRow {
        OrderId?: number;
        VisitId?: number;
        MedicineId?: number;
        Quantity?: number;
        DailyDose?: string;
        Comment?: string;
        UserId?: number;
        Updated?: string;
        InsideSale?: boolean;
        MedicineName?: string;
    }

    export namespace MedPrescriptionsRow {
        export const idProperty = 'OrderId';
        export const nameProperty = 'DailyDose';
        export const localTextPrefix = 'Pharmacy.MedPrescriptions';

        export declare const enum Fields {
            OrderId = "OrderId",
            VisitId = "VisitId",
            MedicineId = "MedicineId",
            Quantity = "Quantity",
            DailyDose = "DailyDose",
            Comment = "Comment",
            UserId = "UserId",
            Updated = "Updated",
            InsideSale = "InsideSale",
            MedicineName = "MedicineName"
        }
    }
}

