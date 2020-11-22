namespace EMR.Imaging {
    export interface ImgImagingsRow {
        Id?: number;
        VisitId?: number;
        ImagingId?: number;
        TestImage?: string;
        Note?: string;
        UserId?: number;
        Updated?: string;
        MRID?: number;
        ImagingName?: string;
        MRN?: string;
    }

    export namespace ImgImagingsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TestImage';
        export const localTextPrefix = 'Imaging.ImgImagings';

        export declare const enum Fields {
            Id = "Id",
            VisitId = "VisitId",
            ImagingId = "ImagingId",
            TestImage = "TestImage",
            Note = "Note",
            UserId = "UserId",
            Updated = "Updated",
            MRID = "MRID",
            ImagingName = "ImagingName",
            MRN = "MRN"
        }
    }
}

