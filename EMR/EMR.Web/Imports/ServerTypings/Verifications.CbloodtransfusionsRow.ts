namespace EMR.Verifications {
    export interface CbloodtransfusionsRow {
        TransfusionId?: number;
        Mrid?: number;
        VisitId?: number;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        BloodGroupId?: number;
        Recomquantity?: number;
        Transmitquantity?: number;
        BloodstatusId?: number;
        RecDateTime?: string;
        SRecDate?: string;
        TransDateTime?: string;
        STransDate?: string;
        Bloodstatus?: string;
        BloodGroup?: string;
    }

    export namespace CbloodtransfusionsRow {
        export const idProperty = 'TransfusionId';
        export const nameProperty = 'SDateOfVisit';
        export const localTextPrefix = 'Verifications.Cbloodtransfusions';

        export declare const enum Fields {
            TransfusionId = "TransfusionId",
            Mrid = "Mrid",
            VisitId = "VisitId",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            BloodGroupId = "BloodGroupId",
            Recomquantity = "Recomquantity",
            Transmitquantity = "Transmitquantity",
            BloodstatusId = "BloodstatusId",
            RecDateTime = "RecDateTime",
            SRecDate = "SRecDate",
            TransDateTime = "TransDateTime",
            STransDate = "STransDate",
            Bloodstatus = "Bloodstatus",
            BloodGroup = "BloodGroup"
        }
    }
}

