namespace EMR.Configs {
    export interface TblAbortionTypeRow {
        AbortionId?: number;
        AbortionTypeDari?: string;
        AbortionTypePashto?: string;
        AbortionTypeEn?: string;
    }

    export namespace TblAbortionTypeRow {
        export const idProperty = 'AbortionId';
        export const nameProperty = 'AbortionTypeDari';
        export const localTextPrefix = 'Configs.TblAbortionType';
        export const lookupKey = 'Configs.TblAbortionType';

        export function getLookup(): Q.Lookup<TblAbortionTypeRow> {
            return Q.getLookup<TblAbortionTypeRow>('Configs.TblAbortionType');
        }

        export declare const enum Fields {
            AbortionId = "AbortionId",
            AbortionTypeDari = "AbortionTypeDari",
            AbortionTypePashto = "AbortionTypePashto",
            AbortionTypeEn = "AbortionTypeEn"
        }
    }
}

