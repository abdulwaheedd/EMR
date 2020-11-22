namespace EMR.Verifications {
    export interface CpatientsForm {
        Mrn: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        EthnicityId: Serenity.LookupEditor;
        GrandFather: Serenity.StringEditor;
        DateOfBirth: Serenity.DateEditor;
        SDateOfBirth: Common.ShamsiDatePickerEditor;
        AgeInYear: Serenity.IntegerEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
        RefertoDoctor: Serenity.LookupEditor;
    }

    export class CpatientsForm extends Serenity.PrefixedContext {
        static formKey = 'Verifications.Cpatients';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CpatientsForm.init)  {
                CpatientsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = Common.ShamsiDatePickerEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(CpatientsForm, [
                    'Mrn', w0,
                    'FirstName', w0,
                    'LastName', w0,
                    'FatherName', w0,
                    'GenderId', w1,
                    'EthnicityId', w1,
                    'GrandFather', w0,
                    'DateOfBirth', w2,
                    'SDateOfBirth', w3,
                    'AgeInYear', w4,
                    'ProvinceId', w1,
                    'DistrictId', w1,
                    'Location', w0,
                    'RefertoDoctor', w1
                ]);
            }
        }
    }
}

