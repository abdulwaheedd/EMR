namespace EMR.VitalSigns {
    export interface VitalvisitsForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        OccupationId: Serenity.LookupEditor;
        MaritalStatusId: Serenity.LookupEditor;
        PhoneNumber: Serenity.StringEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
        TypeofvisitId: Serenity.LookupEditor;
        DateOfVisit: Serenity.DateEditor;
        CycleId: Serenity.LookupEditor;
    }

    export class VitalvisitsForm extends Serenity.PrefixedContext {
        static formKey = 'VitalSigns.Vitalvisits';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VitalvisitsForm.init)  {
                VitalvisitsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;

                Q.initFormType(VitalvisitsForm, [
                    'Mrid', w0,
                    'MRN', w0,
                    'OccupationId', w1,
                    'MaritalStatusId', w1,
                    'PhoneNumber', w0,
                    'ProvinceId', w1,
                    'DistrictId', w1,
                    'Location', w0,
                    'TypeofvisitId', w1,
                    'DateOfVisit', w2,
                    'CycleId', w1
                ]);
            }
        }
    }
}

