namespace EMR.Configs {
    export interface LkpPatientTypeRow {
        TypeId?: number;
        TypeNameEn?: string;
        TypeNameDari?: string;
        TypeNamePashto?: string;
    }

    export namespace LkpPatientTypeRow {
        export const idProperty = 'TypeId';
        export const nameProperty = 'TypeNameEn';
        export const localTextPrefix = 'Configs.LkpPatientType';
        export const lookupKey = 'Configs.LkpPatientType';

        export function getLookup(): Q.Lookup<LkpPatientTypeRow> {
            return Q.getLookup<LkpPatientTypeRow>('Configs.LkpPatientType');
        }

        export declare const enum Fields {
            TypeId = "TypeId",
            TypeNameEn = "TypeNameEn",
            TypeNameDari = "TypeNameDari",
            TypeNamePashto = "TypeNamePashto"
        }
    }
}

