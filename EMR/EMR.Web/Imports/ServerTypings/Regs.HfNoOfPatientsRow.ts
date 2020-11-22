namespace EMR.Regs {
    export interface HfNoOfPatientsRow {
        FacilityId?: number;
        NoOfPatients?: number;
    }

    export namespace HfNoOfPatientsRow {
        export const idProperty = 'FacilityId';
        export const localTextPrefix = 'Regs.HfNoOfPatients';

        export declare const enum Fields {
            FacilityId = "FacilityId",
            NoOfPatients = "NoOfPatients"
        }
    }
}

