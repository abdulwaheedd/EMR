namespace EMR.VitalSigns {
    export interface SchedulingRow {
        ScheduleId?: number;
        VisitId?: number;
        CycleId?: number;
        PlanDate?: string;
        SPlanDate?: string;
        Comment?: string;
        UserId?: number;
        Updated?: string;
        CycleCyclename?: string;
        CycleCycledescription?: string;
    }

    export namespace SchedulingRow {
        export const idProperty = 'ScheduleId';
        export const nameProperty = 'SPlanDate';
        export const localTextPrefix = 'VitalSigns.Scheduling';

        export declare const enum Fields {
            ScheduleId = "ScheduleId",
            VisitId = "VisitId",
            CycleId = "CycleId",
            PlanDate = "PlanDate",
            SPlanDate = "SPlanDate",
            Comment = "Comment",
            UserId = "UserId",
            Updated = "Updated",
            CycleCyclename = "CycleCyclename",
            CycleCycledescription = "CycleCycledescription"
        }
    }
}

