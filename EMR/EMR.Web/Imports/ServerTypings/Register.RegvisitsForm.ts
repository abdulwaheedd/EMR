namespace EMR.Register {
    export interface RegvisitsForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        OccupationId: Serenity.LookupEditor;
        MaritalStatusId: Serenity.LookupEditor;
        PhoneNumber: Serenity.MaskedEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
        TypeofvisitId: Serenity.LookupEditor;
        DurationOfStay: Serenity.IntegerEditor;
        DateOfVisit: Serenity.DateEditor;
        SDateOfVisit: Common.ShamsiDatePickerEditor;
        CycleId: Serenity.LookupEditor;
    }

    export class RegvisitsForm extends Serenity.PrefixedContext {
        static formKey = 'Register.Regvisits';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RegvisitsForm.init)  {
                RegvisitsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.MaskedEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DateEditor;
                var w5 = Common.ShamsiDatePickerEditor;

                Q.initFormType(RegvisitsForm, [
                    'Mrid', w0,
                    'MRN', w0,
                    'OccupationId', w1,
                    'MaritalStatusId', w1,
                    'PhoneNumber', w2,
                    'ProvinceId', w1,
                    'DistrictId', w1,
                    'Location', w0,
                    'TypeofvisitId', w1,
                    'DurationOfStay', w3,
                    'DateOfVisit', w4,
                    'SDateOfVisit', w5,
                    'CycleId', w1
                ]);
            }
        }
    }
}

