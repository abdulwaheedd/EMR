namespace EMR.Verifications {
    export interface CmedadministrationRow {
        MedadminId?: number;
        OrderId?: number;
        Comment?: string;
        Quantity?: number;
        RecDateTime?: string;
        RecSDate?: string;
        AppDateTime?: string;
        AppSDate?: string;
        Medicine?: string;
    }

    export namespace CmedadministrationRow {
        export const idProperty = 'MedadminId';
        export const nameProperty = 'Comment';
        export const localTextPrefix = 'Verifications.Cmedadministration';

        export declare const enum Fields {
            MedadminId = "MedadminId",
            OrderId = "OrderId",
            Comment = "Comment",
            Quantity = "Quantity",
            RecDateTime = "RecDateTime",
            RecSDate = "RecSDate",
            AppDateTime = "AppDateTime",
            AppSDate = "AppSDate",
            Medicine = "Medicine"
        }
    }
}

