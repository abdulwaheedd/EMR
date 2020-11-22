namespace EMR.OPD {
    export interface PatientsRow {
        Mrid?: number;
        Mrn?: string;
        FirstName?: string;
        LastName?: string;
        FatherName?: string;
        GenderId?: number;
        DateOfBirth?: string;
        AgeInYear?: number;
        UserId?: number;
        Updated?: string;
        EthnicityId?: number;
        RefertoDoctor?: number;
        EthnicityName?: string;
        GenderName?: string;
    }

    export namespace PatientsRow {
        export const idProperty = 'Mrid';
        export const nameProperty = 'Mrn';
        export const localTextPrefix = 'OPD.Patients';
        export const lookupKey = 'Configs.Outpatients';

        export function getLookup(): Q.Lookup<PatientsRow> {
            return Q.getLookup<PatientsRow>('Configs.Outpatients');
        }

        export declare const enum Fields {
            Mrid = "Mrid",
            Mrn = "Mrn",
            FirstName = "FirstName",
            LastName = "LastName",
            FatherName = "FatherName",
            GenderId = "GenderId",
            DateOfBirth = "DateOfBirth",
            AgeInYear = "AgeInYear",
            UserId = "UserId",
            Updated = "Updated",
            EthnicityId = "EthnicityId",
            RefertoDoctor = "RefertoDoctor",
            EthnicityName = "EthnicityName",
            GenderName = "GenderName"
        }
    }
}

