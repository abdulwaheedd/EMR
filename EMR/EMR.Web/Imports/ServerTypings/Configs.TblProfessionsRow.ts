namespace EMR.Configs {
    export interface TblProfessionsRow {
        ProId?: number;
        ProName?: string;
        ProNameD?: string;
    }

    export namespace TblProfessionsRow {
        export const idProperty = 'ProId';
        export const nameProperty = 'ProName';
        export const localTextPrefix = 'Configs.TblProfessions';

        export declare const enum Fields {
            ProId = "ProId",
            ProName = "ProName",
            ProNameD = "ProNameD"
        }
    }
}

