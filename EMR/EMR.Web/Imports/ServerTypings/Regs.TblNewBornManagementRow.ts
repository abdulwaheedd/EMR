namespace EMR.Regs {
    export interface TblNewBornManagementRow {
        NbId?: number;
        AdId?: number;
        NbStatus?: number;
        NbOutcome?: number;
        NbWeight?: number;
        NbNumber?: number;
        NbGender?: number;
        UserName?: string;
        LastUpdated?: string;
        TenantId?: number;
        AdMrid?: number;
        AdWardid?: number;
        AdAdDiagnosis?: number;
        NewbornStatus?: string;
        Newbornoutcome?: string;
        Newbornweight?: string;
        Newbornchild?: string;
        Newborngender?: string;
    }

    export namespace TblNewBornManagementRow {
        export const idProperty = 'NbId';
        export const nameProperty = 'UserName';
        export const localTextPrefix = 'Regs.TblNewBornManagement';

        export declare const enum Fields {
            NbId = "NbId",
            AdId = "AdId",
            NbStatus = "NbStatus",
            NbOutcome = "NbOutcome",
            NbWeight = "NbWeight",
            NbNumber = "NbNumber",
            NbGender = "NbGender",
            UserName = "UserName",
            LastUpdated = "LastUpdated",
            TenantId = "TenantId",
            AdMrid = "AdMrid",
            AdWardid = "AdWardid",
            AdAdDiagnosis = "AdAdDiagnosis",
            NewbornStatus = "NewbornStatus",
            Newbornoutcome = "Newbornoutcome",
            Newbornweight = "Newbornweight",
            Newbornchild = "Newbornchild",
            Newborngender = "Newborngender"
        }
    }
}

