namespace EMR.OPD {
    export interface VisitsForm {
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

    export class VisitsForm extends Serenity.PrefixedContext {
        static formKey = 'OPD.Visits';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VisitsForm.init)  {
                VisitsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;

                Q.initFormType(VisitsForm, [
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

