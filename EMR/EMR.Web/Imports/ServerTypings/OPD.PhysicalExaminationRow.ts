namespace EMR.OPD {
    export interface PhysicalExaminationRow {
        Id?: number;
        VisitId?: number;
        GroupId?: number;
        PhysExamId?: number;
        Note?: string;
        UserId?: number;
        Updated?: string;
        PhysExamName?: string;
        PhysExamGroup?: string;
    }

    export namespace PhysicalExaminationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Note';
        export const localTextPrefix = 'OPD.PhysicalExamination';

        export declare const enum Fields {
            Id = "Id",
            VisitId = "VisitId",
            GroupId = "GroupId",
            PhysExamId = "PhysExamId",
            Note = "Note",
            UserId = "UserId",
            Updated = "Updated",
            PhysExamName = "PhysExamName",
            PhysExamGroup = "PhysExamGroup"
        }
    }
}

