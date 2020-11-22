namespace EMR.Verifications {
    export interface CpatientsRow {
        Mrid?: number;
        Mrn?: string;
        FirstName?: string;
        LastName?: string;
        FatherName?: string;
        GenderId?: number;
        DateOfBirth?: string;
        SDateOfBirth?: string;
        AgeInYear?: number;
        GrandFather?: string;
        ProvinceId?: number;
        DistrictId?: number;
        Location?: string;
        EthnicityId?: number;
        RefertoDoctor?: number;
        EthnicityName?: string;
        GenderName?: string;
        ProvinceName?: string;
        DistrictName?: string;
    }

    export namespace CpatientsRow {
        export const idProperty = 'Mrid';
        export const nameProperty = 'Mrn';
        export const localTextPrefix = 'Verifications.Cpatients';

        export declare const enum Fields {
            Mrid = "Mrid",
            Mrn = "Mrn",
            FirstName = "FirstName",
            LastName = "LastName",
            FatherName = "FatherName",
            GenderId = "GenderId",
            DateOfBirth = "DateOfBirth",
            SDateOfBirth = "SDateOfBirth",
            AgeInYear = "AgeInYear",
            GrandFather = "GrandFather",
            ProvinceId = "ProvinceId",
            DistrictId = "DistrictId",
            Location = "Location",
            EthnicityId = "EthnicityId",
            RefertoDoctor = "RefertoDoctor",
            EthnicityName = "EthnicityName",
            GenderName = "GenderName",
            ProvinceName = "ProvinceName",
            DistrictName = "DistrictName"
        }
    }
}

