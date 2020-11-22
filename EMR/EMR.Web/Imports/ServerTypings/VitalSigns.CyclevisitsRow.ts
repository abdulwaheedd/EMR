namespace EMR.VitalSigns {
    export interface CyclevisitsRow {
        SessionId?: number;
        ScheduleId?: number;
        ActualDate?: string;
        SActualDate?: string;
        CareTypeId?: number;
        UserId?: number;
        Updated?: string;
        ScheduleVisitId?: number;
        ScheduleCycleId?: number;
        SchedulePlanDate?: string;
        ScheduleSPlanDate?: string;
        ScheduleComment?: string;
        Caretype?: string;
    }

    export namespace CyclevisitsRow {
        export const idProperty = 'SessionId';
        export const nameProperty = 'SActualDate';
        export const localTextPrefix = 'VitalSigns.Cyclevisits';

        export declare const enum Fields {
            SessionId = "SessionId",
            ScheduleId = "ScheduleId",
            ActualDate = "ActualDate",
            SActualDate = "SActualDate",
            CareTypeId = "CareTypeId",
            UserId = "UserId",
            Updated = "Updated",
            ScheduleVisitId = "ScheduleVisitId",
            ScheduleCycleId = "ScheduleCycleId",
            SchedulePlanDate = "SchedulePlanDate",
            ScheduleSPlanDate = "ScheduleSPlanDate",
            ScheduleComment = "ScheduleComment",
            Caretype = "Caretype"
        }
    }
}

