namespace EMR.Medadmins {
    export interface VisitsmedicineRow {
        OrderId?: number;
        VisitId?: number;
        Mrid?: number;
        Medicine?: string;
    }

    export namespace VisitsmedicineRow {
        export const idProperty = 'OrderId';
        export const nameProperty = 'Medicine';
        export const localTextPrefix = 'Medadmins.Visitsmedicine';
        export const lookupKey = 'Configs.VisitsMedicine';

        export function getLookup(): Q.Lookup<VisitsmedicineRow> {
            return Q.getLookup<VisitsmedicineRow>('Configs.VisitsMedicine');
        }

        export declare const enum Fields {
            OrderId = "OrderId",
            VisitId = "VisitId",
            Mrid = "Mrid",
            Medicine = "Medicine"
        }
    }
}

