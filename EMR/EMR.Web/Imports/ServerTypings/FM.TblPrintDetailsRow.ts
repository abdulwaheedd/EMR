namespace EMR.FM {
    export interface TblPrintDetailsRow {
        PrintId?: number;
        FeeId?: number;
        DateTimePrinted?: string;
        PrintedBy?: string;
    }

    export namespace TblPrintDetailsRow {
        export const idProperty = 'PrintId';
        export const nameProperty = 'PrintedBy';
        export const localTextPrefix = 'FM.TblPrintDetails';

        export declare const enum Fields {
            PrintId = "PrintId",
            FeeId = "FeeId",
            DateTimePrinted = "DateTimePrinted",
            PrintedBy = "PrintedBy"
        }
    }
}

