namespace EMR.Administration {
    export interface DashboardUrlRow {
        Id?: number;
        Url?: string;
        Active?: boolean;
    }

    export namespace DashboardUrlRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Url';
        export const localTextPrefix = 'Administration.DashboardUrl';

        export declare const enum Fields {
            Id = "Id",
            Url = "Url",
            Active = "Active"
        }
    }
}

