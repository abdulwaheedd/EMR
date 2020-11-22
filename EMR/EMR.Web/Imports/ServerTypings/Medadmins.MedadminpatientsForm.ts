namespace EMR.Medadmins {
    export interface MedadminpatientsForm {
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

    export class MedadminpatientsForm extends Serenity.PrefixedContext {
        static formKey = 'Medadmins.Medadminpatients';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MedadminpatientsForm.init)  {
                MedadminpatientsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(MedadminpatientsForm, [
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

