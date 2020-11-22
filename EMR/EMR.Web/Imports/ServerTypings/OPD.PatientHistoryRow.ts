namespace EMR.OPD {
    export interface PatientHistoryRow {
        Id?: number;
        VisitId?: number;
        HistoryId?: number;
        Note?: string;
        UserId?: number;
        Updated?: string;
        HistoryName?: string;
    }

    export namespace PatientHistoryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Note';
        export const localTextPrefix = 'OPD.PatientHistory';

        export declare const enum Fields {
            Id = "Id",
            VisitId = "VisitId",
            HistoryId = "HistoryId",
            Note = "Note",
            UserId = "UserId",
            Updated = "Updated",
            HistoryName = "HistoryName"
        }
    }
}

