namespace EMR.Configs {
    export interface TblRelationRow {
        RelationId?: number;
        RelationName?: string;
        RelationNameEng?: string;
        Relation?: string;
    }

    export namespace TblRelationRow {
        export const idProperty = 'RelationId';
        export const nameProperty = 'Relation';
        export const localTextPrefix = 'Configs.TblRelation';
        export const lookupKey = 'Configs.TblRelation';

        export function getLookup(): Q.Lookup<TblRelationRow> {
            return Q.getLookup<TblRelationRow>('Configs.TblRelation');
        }

        export declare const enum Fields {
            RelationId = "RelationId",
            RelationName = "RelationName",
            RelationNameEng = "RelationNameEng",
            Relation = "Relation"
        }
    }
}

