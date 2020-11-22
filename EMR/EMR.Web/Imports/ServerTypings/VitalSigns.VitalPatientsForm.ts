namespace EMR.VitalSigns {
    export interface VitalPatientsForm {
        Mrn: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        DateOfBirth: Serenity.DateEditor;
        AgeInYear: Serenity.IntegerEditor;
        EthnicityId: Serenity.LookupEditor;
        RefertoDoctor: Serenity.LookupEditor;
    }

    export class VitalPatientsForm extends Serenity.PrefixedContext {
        static formKey = 'VitalSigns.VitalPatients';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VitalPatientsForm.init)  {
                VitalPatientsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(VitalPatientsForm, [
                    'Mrn', w0,
                    'FirstName', w0,
                    'LastName', w0,
                    'FatherName', w0,
                    'GenderId', w1,
                    'DateOfBirth', w2,
                    'AgeInYear', w3,
                    'EthnicityId', w1,
                    'RefertoDoctor', w1
                ]);
            }
        }
    }
}

