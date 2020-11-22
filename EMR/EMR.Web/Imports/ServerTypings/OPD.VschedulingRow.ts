namespace EMR.OPD {
    export interface VschedulingRow {
        ScheduleId?: number;
        VisitId?: number;
        CycleId?: number;
        PlanDate?: string;
        SPlanDate?: string;
        Comment?: string;
        UserId?: number;
        Updated?: string;
        CycleCyclename?: string;
    }

    export namespace VschedulingRow {
        export const idProperty = 'ScheduleId';
        export const nameProperty = 'SPlanDate';
        export const localTextPrefix = 'OPD.Vscheduling';

        export declare const enum Fields {
            ScheduleId = "ScheduleId",
            VisitId = "VisitId",
            CycleId = "CycleId",
            PlanDate = "PlanDate",
            SPlanDate = "SPlanDate",
            Comment = "Comment",
            UserId = "UserId",
            Updated = "Updated",
            CycleCyclename = "CycleCyclename"
        }
    }
}

