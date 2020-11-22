namespace EMR.Configs {
    export interface EthnicityRow {
        EthnicityId?: number;
        EthnicityName?: string;
    }

    export namespace EthnicityRow {
        export const idProperty = 'EthnicityId';
        export const nameProperty = 'EthnicityName';
        export const localTextPrefix = 'Configs.Ethnicity';
        export const lookupKey = 'Configs.LkpEthnicity';

        export function getLookup(): Q.Lookup<EthnicityRow> {
            return Q.getLookup<EthnicityRow>('Configs.LkpEthnicity');
        }

        export declare const enum Fields {
            EthnicityId = "EthnicityId",
            EthnicityName = "EthnicityName"
        }
    }
}

