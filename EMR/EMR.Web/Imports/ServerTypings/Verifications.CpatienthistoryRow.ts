namespace EMR.Verifications {
    export interface CpatienthistoryRow {
        Id?: number;
        Mrid?: number;
        VisitId?: number;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        HistoryId?: number;
        Note?: string;
        HistoryName?: string;
    }

    export namespace CpatienthistoryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SDateOfVisit';
        export const localTextPrefix = 'Verifications.Cpatienthistory';

        export declare const enum Fields {
            Id = "Id",
            Mrid = "Mrid",
            VisitId = "VisitId",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            HistoryId = "HistoryId",
            Note = "Note",
            HistoryName = "HistoryName"
        }
    }
}

