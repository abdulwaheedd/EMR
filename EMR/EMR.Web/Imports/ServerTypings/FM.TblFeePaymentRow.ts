namespace EMR.FM {
    export interface TblFeePaymentRow {
        FeeId?: number;
        Mrid?: number;
        ServiceId?: number;
        ServiceFee?: number;
        DateCreated?: string;
        UserName?: string;
        LastUpdated?: string;
        Times?: number;
        ServiceTypeServiceType?: string;
    }

    export namespace TblFeePaymentRow {
        export const idProperty = 'FeeId';
        export const localTextPrefix = 'FM.TblFeePayment';

        export declare const enum Fields {
            FeeId = "FeeId",
            Mrid = "Mrid",
            ServiceId = "ServiceId",
            ServiceFee = "ServiceFee",
            DateCreated = "DateCreated",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            Times = "Times",
            ServiceTypeServiceType = "ServiceTypeServiceType"
        }
    }
}

