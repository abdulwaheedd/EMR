namespace EMR.Verifications {
    export interface CphysicalexaminationRow {
        Id?: number;
        Mrid?: number;
        VisitId?: number;
        DateOfVisit?: string;
        SDateOfVisit?: string;
        GroupId?: number;
        PhysExamId?: number;
        Note?: string;
        PhysExamName?: string;
        PhysExamGroup?: string;
    }

    export namespace CphysicalexaminationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SDateOfVisit';
        export const localTextPrefix = 'Verifications.Cphysicalexamination';

        export declare const enum Fields {
            Id = "Id",
            Mrid = "Mrid",
            VisitId = "VisitId",
            DateOfVisit = "DateOfVisit",
            SDateOfVisit = "SDateOfVisit",
            GroupId = "GroupId",
            PhysExamId = "PhysExamId",
            Note = "Note",
            PhysExamName = "PhysExamName",
            PhysExamGroup = "PhysExamGroup"
        }
    }
}

