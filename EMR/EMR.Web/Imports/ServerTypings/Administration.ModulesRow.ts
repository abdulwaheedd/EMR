namespace EMR.Administration {
    export interface ModulesRow {
        ModuleId?: number;
        ModuleName?: string;
        ModuleDescription?: string;
    }

    export namespace ModulesRow {
        export const idProperty = 'ModuleId';
        export const nameProperty = 'ModuleName';
        export const localTextPrefix = 'Administration.Modules';
        export const lookupKey = 'Administration.Modules';

        export function getLookup(): Q.Lookup<ModulesRow> {
            return Q.getLookup<ModulesRow>('Administration.Modules');
        }

        export declare const enum Fields {
            ModuleId = "ModuleId",
            ModuleName = "ModuleName",
            ModuleDescription = "ModuleDescription"
        }
    }
}

