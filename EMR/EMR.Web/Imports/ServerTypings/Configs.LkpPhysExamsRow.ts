namespace EMR.Configs {
    export interface LkpPhysExamsRow {
        PhysExamId?: number;
        PhysExamName?: string;
        GroupId?: number;
        GroupName?: string;
        GroupEamName?: string;
    }

    export namespace LkpPhysExamsRow {
        export const idProperty = 'PhysExamId';
        export const nameProperty = 'GroupEamName';
        export const localTextPrefix = 'Configs.LkpPhysExams';
        export const lookupKey = 'Configs.lkpPhysExams';

        export function getLookup(): Q.Lookup<LkpPhysExamsRow> {
            return Q.getLookup<LkpPhysExamsRow>('Configs.lkpPhysExams');
        }

        export declare const enum Fields {
            PhysExamId = "PhysExamId",
            PhysExamName = "PhysExamName",
            GroupId = "GroupId",
            GroupName = "GroupName",
            GroupEamName = "GroupEamName"
        }
    }
}

