namespace EMR.Configs {
    export interface TypeofvisitRow {
        Id?: number;
        TypeOfVisit?: string;
    }

    export namespace TypeofvisitRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TypeOfVisit';
        export const localTextPrefix = 'Configs.Typeofvisit';
        export const lookupKey = 'Configs.Typeofvisit';

        export function getLookup(): Q.Lookup<TypeofvisitRow> {
            return Q.getLookup<TypeofvisitRow>('Configs.Typeofvisit');
        }

        export declare const enum Fields {
            Id = "Id",
            TypeOfVisit = "TypeOfVisit"
        }
    }
}

