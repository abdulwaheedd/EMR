namespace EMR.Verifications {
    export interface CmedprescriptionsRow {
        OrderId?: number;
        Mrid?: number;
        VisitId?: number;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        MedicineId?: number;
        Quantity?: number;
        DailyDose?: string;
        Comment?: string;
        InsideSale?: boolean;
        MedicineName?: string;
    }

    export namespace CmedprescriptionsRow {
        export const idProperty = 'OrderId';
        export const nameProperty = 'SDateOfVisit';
        export const localTextPrefix = 'Verifications.Cmedprescriptions';

        export declare const enum Fields {
            OrderId = "OrderId",
            Mrid = "Mrid",
            VisitId = "VisitId",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            MedicineId = "MedicineId",
            Quantity = "Quantity",
            DailyDose = "DailyDose",
            Comment = "Comment",
            InsideSale = "InsideSale",
            MedicineName = "MedicineName"
        }
    }
}

