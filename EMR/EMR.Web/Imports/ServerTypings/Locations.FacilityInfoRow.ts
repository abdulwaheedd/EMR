namespace EMR.Locations {
    export interface FacilityInfoRow {
        FacilityId?: number;
        DistrictId?: number;
        ViliCode?: string;
        FacilityName?: string;
        FacilityNameDari?: string;
        FacilityNamePashto?: string;
        FacilityType?: number;
        GrantId?: string;
        Lat?: number;
        Lon?: number;
        GpsLattitude?: number;
        GpsLongtitude?: number;
        Implementer?: string;
        FacilityFullName?: string;
        DistProvinceId?: number;
        DistrictEng?: string;
        DistrictDari?: string;
        DistrictPashto?: string;
        FacilityTypeFacType?: string;
        FacilityTypeFacTypeDari?: string;
        FacilityTypeFacTypePashto?: string;
        ProvinAbbrv?: string;
        NoOfPatients?: number;
        TenantId?: number;
    }

    export namespace FacilityInfoRow {
        export const idProperty = 'FacilityId';
        export const nameProperty = 'FacilityFullName';
        export const localTextPrefix = 'Locations.FacilityInfo';
        export const lookupKey = 'Locations.FacilityInfo';

        export function getLookup(): Q.Lookup<FacilityInfoRow> {
            return Q.getLookup<FacilityInfoRow>('Locations.FacilityInfo');
        }

        export declare const enum Fields {
            FacilityId = "FacilityId",
            DistrictId = "DistrictId",
            ViliCode = "ViliCode",
            FacilityName = "FacilityName",
            FacilityNameDari = "FacilityNameDari",
            FacilityNamePashto = "FacilityNamePashto",
            FacilityType = "FacilityType",
            GrantId = "GrantId",
            Lat = "Lat",
            Lon = "Lon",
            GpsLattitude = "GpsLattitude",
            GpsLongtitude = "GpsLongtitude",
            Implementer = "Implementer",
            FacilityFullName = "FacilityFullName",
            DistProvinceId = "DistProvinceId",
            DistrictEng = "DistrictEng",
            DistrictDari = "DistrictDari",
            DistrictPashto = "DistrictPashto",
            FacilityTypeFacType = "FacilityTypeFacType",
            FacilityTypeFacTypeDari = "FacilityTypeFacTypeDari",
            FacilityTypeFacTypePashto = "FacilityTypeFacTypePashto",
            ProvinAbbrv = "ProvinAbbrv",
            NoOfPatients = "NoOfPatients",
            TenantId = "TenantId"
        }
    }
}

