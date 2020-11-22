namespace EMR.OPD {
    export interface RecommedationsRow {
        RecommandationId?: number;
        RecomId?: number;
        VisitId?: number;
        Note?: string;
        UserId?: number;
        Updated?: string;
        RecomRecommandName?: string;
        VisitMrid?: number;
    }

    export namespace RecommedationsRow {
        export const idProperty = 'RecommandationId';
        export const nameProperty = 'Note';
        export const localTextPrefix = 'OPD.Recommedations';

        export declare const enum Fields {
            RecommandationId = "RecommandationId",
            RecomId = "RecomId",
            VisitId = "VisitId",
            Note = "Note",
            UserId = "UserId",
            Updated = "Updated",
            RecomRecommandName = "RecomRecommandName",
            VisitMrid = "VisitMrid"
        }
    }
}

