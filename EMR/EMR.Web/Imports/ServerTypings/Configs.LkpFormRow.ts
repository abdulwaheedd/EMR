namespace EMR.Configs {
    export interface LkpFormRow {
        FormId?: number;
        FormName?: string;
    }

    export namespace LkpFormRow {
        export const idProperty = 'FormId';
        export const nameProperty = 'FormName';
        export const localTextPrefix = 'Configs.LkpForm';
        export const lookupKey = 'Configs.lkpForm';

        export function getLookup(): Q.Lookup<LkpFormRow> {
            return Q.getLookup<LkpFormRow>('Configs.lkpForm');
        }

        export declare const enum Fields {
            FormId = "FormId",
            FormName = "FormName"
        }
    }
}

