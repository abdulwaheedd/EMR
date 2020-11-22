namespace EMR.Register {
    export interface PatAttendantsRow {
        AttendantId?: number;
        VisitId?: number;
        AttendantName?: string;
        FatherName?: string;
        GenderId?: number;
        Phone?: string;
        RelationType?: number;
        Address?: string;
        Updated?: string;
        UserId?: number;
        GenderName?: string;
        RelationName?: string;
    }

    export namespace PatAttendantsRow {
        export const idProperty = 'AttendantId';
        export const nameProperty = 'AttendantName';
        export const localTextPrefix = 'Register.PatAttendants';

        export declare const enum Fields {
            AttendantId = "AttendantId",
            VisitId = "VisitId",
            AttendantName = "AttendantName",
            FatherName = "FatherName",
            GenderId = "GenderId",
            Phone = "Phone",
            RelationType = "RelationType",
            Address = "Address",
            Updated = "Updated",
            UserId = "UserId",
            GenderName = "GenderName",
            RelationName = "RelationName"
        }
    }
}

