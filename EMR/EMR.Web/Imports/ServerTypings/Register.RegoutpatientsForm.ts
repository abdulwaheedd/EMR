namespace EMR.Register {
    export interface RegoutpatientsForm {
        Mrn: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        GenderId: Serenity.LookupEditor;
        GrandFather: Serenity.StringEditor;
        DateOfBirth: Serenity.DateEditor;
        SDateOfBirth: Common.ShamsiDatePickerEditor;
        AgeInYear: Serenity.IntegerEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
        RefertoDoctor: Serenity.LookupEditor;
    }

    export class RegoutpatientsForm extends Serenity.PrefixedContext {
        static formKey = 'Register.Regoutpatients';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RegoutpatientsForm.init)  {
                RegoutpatientsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = Common.ShamsiDatePickerEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(RegoutpatientsForm, [
                    'Mrn', w0,
                    'FirstName', w0,
                    'LastName', w0,
                    'FatherName', w0,
                    'GenderId', w1,
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

