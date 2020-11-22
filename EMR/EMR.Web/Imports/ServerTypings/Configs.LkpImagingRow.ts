namespace EMR.Configs {
    export interface LkpImagingRow {
        ImagingId?: number;
        ImagingName?: string;
        Note?: string;
    }

    export namespace LkpImagingRow {
        export const idProperty = 'ImagingId';
        export const nameProperty = 'ImagingName';
        export const localTextPrefix = 'Configs.LkpImaging';
        export const lookupKey = 'Configs.LkpImaging';

        export function getLookup(): Q.Lookup<LkpImagingRow> {
            return Q.getLookup<LkpImagingRow>('Configs.LkpImaging');
        }

        export declare const enum Fields {
            ImagingId = "ImagingId",
            ImagingName = "ImagingName",
            Note = "Note"
        }
    }
}

