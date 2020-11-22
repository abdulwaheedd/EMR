namespace EMR.Medadmins {
    export interface MPrescriptionsRow {
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

    export namespace MPrescriptionsRow {
        export const idProperty = 'OrderId';
        export const nameProperty = 'DailyDose';
        export const localTextPrefix = 'Medadmins.MPrescriptions';

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

