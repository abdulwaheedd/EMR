namespace EMR.Configs {
    export interface TblWrdVarRow {
        Wvid?: number;
        Wrdid?: number;
        DiagnTreatComp?: number;
        VarNameEnglish?: string;
        VarNameDari?: string;
        VarNamePashto?: string;
        VarSpecification?: string;
        WrdidWardName?: string;
        WrdidWardNameD?: string;
        WrdidWardNumBeds?: number;
        WrdidUserName?: string;
        WrdidLastUpdated?: string;
        WwardDiseaseName?: string;
    }

    export namespace TblWrdVarRow {
        export const idProperty = 'Wvid';
        export const nameProperty = 'WwardDiseaseName';
        export const localTextPrefix = 'Configs.TblWrdVar';
        export const lookupKey = 'Configs.TblWrdVar';

        export function getLookup(): Q.Lookup<TblWrdVarRow> {
            return Q.getLookup<TblWrdVarRow>('Configs.TblWrdVar');
        }

        export declare const enum Fields {
            Wvid = "Wvid",
            Wrdid = "Wrdid",
            DiagnTreatComp = "DiagnTreatComp",
            VarNameEnglish = "VarNameEnglish",
            VarNameDari = "VarNameDari",
            VarNamePashto = "VarNamePashto",
            VarSpecification = "VarSpecification",
            WrdidWardName = "WrdidWardName",
            WrdidWardNameD = "WrdidWardNameD",
            WrdidWardNumBeds = "WrdidWardNumBeds",
            WrdidUserName = "WrdidUserName",
            WrdidLastUpdated = "WrdidLastUpdated",
            WwardDiseaseName = "WwardDiseaseName"
        }
    }
}

