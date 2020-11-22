namespace EMR.Register {
    export interface NameslistRow {
        Id?: number;
        ShortName?: string;
        FullName?: string;
        FacilityId?: number;
    }

    export namespace NameslistRow {
        export const idProperty = 'Id';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Register.Nameslist';
        export const lookupKey = 'Register.NameslistRow';

        export function getLookup(): Q.Lookup<NameslistRow> {
            return Q.getLookup<NameslistRow>('Register.NameslistRow');
        }

        export declare const enum Fields {
            Id = "Id",
            ShortName = "ShortName",
            FullName = "FullName",
            FacilityId = "FacilityId"
        }
    }
}

