namespace EMR.Medadmins {
    export interface MedadministrationRow {
        MedadminId?: number;
        OrderId?: number;
        Comment?: string;
        Quantity?: number;
        RecDateTime?: string;
        RecSDate?: string;
        UserId?: number;
        Updated?: string;
        AppDateTime?: string;
        AppSDate?: string;
        AppUserId?: number;
        AppUpdated?: string;
        Medicine?: string;
    }

    export namespace MedadministrationRow {
        export const idProperty = 'MedadminId';
        export const nameProperty = 'Comment';
        export const localTextPrefix = 'Medadmins.Medadministration';

        export declare const enum Fields {
            MedadminId = "MedadminId",
            OrderId = "OrderId",
            Comment = "Comment",
            Quantity = "Quantity",
            RecDateTime = "RecDateTime",
            RecSDate = "RecSDate",
            UserId = "UserId",
            Updated = "Updated",
            AppDateTime = "AppDateTime",
            AppSDate = "AppSDate",
            AppUserId = "AppUserId",
            AppUpdated = "AppUpdated",
            Medicine = "Medicine"
        }
    }
}

