namespace EMR.FM {
    export interface UserFeePatientsForm {
        FacilityId: Serenity.LookupEditor;
        Mrn: Serenity.StringEditor;
        PatName: Serenity.StringEditor;
        PatFatName: Serenity.StringEditor;
        PatGender: Serenity.LookupEditor;
        PatRealationName: Serenity.StringEditor;
    }

    export class UserFeePatientsForm extends Serenity.PrefixedContext {
        static formKey = 'FM.UserFeePatients';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserFeePatientsForm.init)  {
                UserFeePatientsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(UserFeePatientsForm, [
                    'FacilityId', w0,
                    'Mrn', w1,
                    'PatName', w1,
                    'PatFatName', w1,
                    'PatGender', w0,
                    'PatRealationName', w1
                ]);
            }
        }
    }
}

