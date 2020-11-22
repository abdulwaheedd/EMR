namespace EMR.Configs {
    export interface TblChildRow {
        ChildId?: number;
        ChildDari?: string;
        ChildPashto?: string;
        ChildEn?: string;
        NbChild?: string;
    }

    export namespace TblChildRow {
        export const idProperty = 'ChildId';
        export const nameProperty = 'NbChild';
        export const localTextPrefix = 'Configs.TblChild';
        export const lookupKey = 'Configs.TblChild';

        export function getLookup(): Q.Lookup<TblChildRow> {
            return Q.getLookup<TblChildRow>('Configs.TblChild');
        }

        export declare const enum Fields {
            ChildId = "ChildId",
            ChildDari = "ChildDari",
            ChildPashto = "ChildPashto",
            ChildEn = "ChildEn",
            NbChild = "NbChild"
        }
    }
}

