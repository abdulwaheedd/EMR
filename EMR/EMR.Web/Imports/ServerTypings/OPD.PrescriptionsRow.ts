namespace EMR.OPD {
    export interface PrescriptionsRow {
        OrderId?: number;
        VisitId?: number;
        MedicineId?: number;
        Quantity?: number;
        DailyDose?: string;
        Comment?: string;
        UserId?: number;
        Updated?: string;
        MedicineName?: string;
    }

    export namespace PrescriptionsRow {
        export const idProperty = 'OrderId';
        export const nameProperty = 'DailyDose';
        export const localTextPrefix = 'OPD.Prescriptions';

        export declare const enum Fields {
            OrderId = "OrderId",
            VisitId = "VisitId",
            MedicineId = "MedicineId",
            Quantity = "Quantity",
            DailyDose = "DailyDose",
            Comment = "Comment",
            UserId = "UserId",
            Updated = "Updated",
            MedicineName = "MedicineName"
        }
    }
}

