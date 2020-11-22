namespace EMR.Regs {
    export interface TblReferralForm {
        AdId: Serenity.StringEditor;
        FacilityId: Serenity.LookupEditor;
        WardId: Serenity.LookupEditor;
        RefDiagnosis: Serenity.LookupEditor;
        RefDate: Serenity.DateEditor;
        RefDateH: Common.ShamsiDatePickerEditor;
        RefType: Serenity.LookupEditor;
    }

    export class TblReferralForm extends Serenity.PrefixedContext {
        static formKey = 'Regs.TblReferral';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblReferralForm.init)  {
                TblReferralForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = Common.ShamsiDatePickerEditor;

                Q.initFormType(TblReferralForm, [
                    'AdId', w0,
                    'FacilityId', w1,
                    'WardId', w1,
                    'RefDiagnosis', w1,
                    'RefDate', w2,
                    'RefDateH', w3,
                    'RefType', w1
                ]);
            }
        }
    }
}

