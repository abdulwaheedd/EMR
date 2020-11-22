namespace EMR.Structure {
    export interface BedReportDetailsRow {
        Id?: number;
        ReportId?: number;
        WardId?: number;
        BedActive?: number;
        TenantId?: number;
        ReportFacilityId?: number;
        ReportYear?: number;
        ReportMonth?: number;
        ReportComment?: string;
        ReportUserName?: string;
        ReportLastUpdated?: string;
        ReportTenantId?: number;
        WardWardName?: string;
        WardWardNameD?: string;
        WardWardNumBeds?: number;
    }

    export namespace BedReportDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'WardWardName';
        export const localTextPrefix = 'Structure.BedReportDetails';

        export declare const enum Fields {
            Id = "Id",
            ReportId = "ReportId",
            WardId = "WardId",
            BedActive = "BedActive",
            TenantId = "TenantId",
            ReportFacilityId = "ReportFacilityId",
            ReportYear = "ReportYear",
            ReportMonth = "ReportMonth",
            ReportComment = "ReportComment",
            ReportUserName = "ReportUserName",
            ReportLastUpdated = "ReportLastUpdated",
            ReportTenantId = "ReportTenantId",
            WardWardName = "WardWardName",
            WardWardNameD = "WardWardNameD",
            WardWardNumBeds = "WardWardNumBeds"
        }
    }
}

