namespace EMR.Locations {
    export interface FacilityInfoReferRow {
        FacilityId?: number;
        FacilityName?: string;
        FacilityNameDari?: string;
        FacilityNamePashto?: string;
        FacilityFullName?: string;
    }

    export namespace FacilityInfoReferRow {
        export const idProperty = 'FacilityId';
        export const nameProperty = 'FacilityFullName';
        export const localTextPrefix = 'Locations.FacilityInfoRefer';
        export const lookupKey = 'Locations.FacilityInfoRefer';

        export function getLookup(): Q.Lookup<FacilityInfoReferRow> {
            return Q.getLookup<FacilityInfoReferRow>('Locations.FacilityInfoRefer');
        }

        export declare const enum Fields {
            FacilityId = "FacilityId",
            FacilityName = "FacilityName",
            FacilityNameDari = "FacilityNameDari",
            FacilityNamePashto = "FacilityNamePashto",
            FacilityFullName = "FacilityFullName"
        }
    }
}

