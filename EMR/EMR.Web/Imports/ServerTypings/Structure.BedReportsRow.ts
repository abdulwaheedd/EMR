namespace EMR.Structure {
    export interface BedReportsRow {
        ReportId?: number;
        FacilityId?: number;
        Year?: number;
        Month?: number;
        Comment?: string;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        FacilityDistrictId?: number;
        FacilityFacilityName?: string;
        FacilityLat?: number;
        FacilityLon?: number;
        DetailList?: BedReportDetailsRow[];
    }

    export namespace BedReportsRow {
        export const idProperty = 'ReportId';
        export const nameProperty = 'Comment';
        export const localTextPrefix = 'Structure.BedReports';

        export declare const enum Fields {
            ReportId = "ReportId",
            FacilityId = "FacilityId",
            Year = "Year",
            Month = "Month",
            Comment = "Comment",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            FacilityDistrictId = "FacilityDistrictId",
            FacilityFacilityName = "FacilityFacilityName",
            FacilityLat = "FacilityLat",
            FacilityLon = "FacilityLon",
            DetailList = "DetailList"
        }
    }
}

