namespace EMR.Configs {
    export interface LkpPhysExamGroupRow {
        GroupId?: number;
        GroupName?: string;
    }

    export namespace LkpPhysExamGroupRow {
        export const idProperty = 'GroupId';
        export const nameProperty = 'GroupName';
        export const localTextPrefix = 'Configs.LkpPhysExamGroup';
        export const lookupKey = 'Configs.LkpPhysExamGroup';

        export function getLookup(): Q.Lookup<LkpPhysExamGroupRow> {
            return Q.getLookup<LkpPhysExamGroupRow>('Configs.LkpPhysExamGroup');
        }

        export declare const enum Fields {
            GroupId = "GroupId",
            GroupName = "GroupName"
        }
    }
}

