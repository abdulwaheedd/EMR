namespace EMR.OPD {
    export interface OpdBloodTransfusionsRow {
        TransfusionId?: number;
        VisitId?: number;
        BloodGroupId?: number;
        Recomquantity?: number;
        Transmitquantity?: number;
        Bloodstatus?: string;
        RecDateTime?: string;
        SRecDate?: string;
        TransDateTime?: string;
        STransDate?: string;
        UserId?: number;
        Updated?: string;
        TranUserId?: number;
        TransUpdated?: string;
        BloodstatusId?: number;
        BloodGroup?: string;
    }

    export namespace OpdBloodTransfusionsRow {
        export const idProperty = 'TransfusionId';
        export const nameProperty = 'Bloodstatus';
        export const localTextPrefix = 'Medadmins.OpdBloodTransfusions';

        export declare const enum Fields {
            TransfusionId = "TransfusionId",
            VisitId = "VisitId",
            BloodGroupId = "BloodGroupId",
            Recomquantity = "Recomquantity",
            Transmitquantity = "Transmitquantity",
            Bloodstatus = "Bloodstatus",
            RecDateTime = "RecDateTime",
            SRecDate = "SRecDate",
            TransDateTime = "TransDateTime",
            STransDate = "STransDate",
            UserId = "UserId",
            Updated = "Updated",
            TranUserId = "TranUserId",
            TransUpdated = "TransUpdated",
            BloodstatusId = "BloodstatusId",
            BloodGroup = "BloodGroup"
        }
    }
}

