namespace EMR.OPD {
    export interface ImagingsRow {
        Id?: number;
        VisitId?: number;
        ImagingId?: number;
        TestImage?: string;
        Note?: string;
        UserId?: number;
        Updated?: string;
        ImagingName?: string;
    }

    export namespace ImagingsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TestImage';
        export const localTextPrefix = 'OPD.Imagings';

        export declare const enum Fields {
            Id = "Id",
            VisitId = "VisitId",
            ImagingId = "ImagingId",
            TestImage = "TestImage",
            Note = "Note",
            UserId = "UserId",
            Updated = "Updated",
            ImagingName = "ImagingName"
        }
    }
}

