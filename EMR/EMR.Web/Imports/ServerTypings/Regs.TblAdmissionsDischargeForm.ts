namespace EMR.Regs {
    export interface TblAdmissionsDischargeForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        Wardid: Serenity.LookupEditor;
        AdDiagnosis: Serenity.LookupEditor;
        AdDateH: Common.ShamsiDatePickerEditor;
        AdDate: Serenity.DateEditor;
        AdAge: Serenity.IntegerEditor;
        AdAgeType: Serenity.LookupEditor;
        AdCaseType: Serenity.LookupEditor;
        DisStatus: Serenity.LookupEditor;
        DisDiagResult: Serenity.LookupEditor;
        DisDiagCausDeath: Serenity.LookupEditor;
        DisDateH: Common.ShamsiDatePickerEditor;
        DisDate: Serenity.DateEditor;
        AbortionType: Serenity.LookupEditor;
    }

    export class TblAdmissionsDischargeForm extends Serenity.PrefixedContext {
        static formKey = 'Regs.TblAdmissionsDischarge';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblAdmissionsDischargeForm.init)  {
                TblAdmissionsDischargeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = Common.ShamsiDatePickerEditor;
                var w3 = s.DateEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(TblAdmissionsDischargeForm, [
                    'Mrid', w0,
                    'MRN', w0,
                    'Wardid', w1,
                    'AdDiagnosis', w1,
                    'AdDateH', w2,
                    'AdDate', w3,
                    'AdAge', w4,
                    'AdAgeType', w1,
                    'AdCaseType', w1,
                    'DisStatus', w1,
                    'DisDiagResult', w1,
                    'DisDiagCausDeath', w1,
                    'DisDateH', w2,
                    'DisDate', w3,
                    'AbortionType', w1
                ]);
            }
        }
    }
}

