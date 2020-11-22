namespace EMR.Verifications {
    export interface CrecommendationsRow {
        RecommandationId?: number;
        Mrid?: number;
        VisitId?: number;
        RecomId?: number;
        Note?: string;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        RecomRecommandName?: string;
    }

    export namespace CrecommendationsRow {
        export const idProperty = 'RecommandationId';
        export const nameProperty = 'Note';
        export const localTextPrefix = 'Verifications.Crecommendations';

        export declare const enum Fields {
            RecommandationId = "RecommandationId",
            Mrid = "Mrid",
            VisitId = "VisitId",
            RecomId = "RecomId",
            Note = "Note",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            RecomRecommandName = "RecomRecommandName"
        }
    }
}

