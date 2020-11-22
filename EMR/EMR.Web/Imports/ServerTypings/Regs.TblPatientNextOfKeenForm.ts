namespace EMR.Regs {
    export interface TblPatientNextOfKeenForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        NoKNameD: Serenity.StringEditor;
        NoKPhone: Serenity.StringEditor;
        NoKRelationType: Serenity.LookupEditor;
        NoKAdd: Serenity.StringEditor;
    }

    export class TblPatientNextOfKeenForm extends Serenity.PrefixedContext {
        static formKey = 'Regs.TblPatientNextOfKeen';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblPatientNextOfKeenForm.init)  {
                TblPatientNextOfKeenForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(TblPatientNextOfKeenForm, [
                    'Mrid', w0,
                    'MRN', w0,
                    'NoKNameD', w0,
                    'NoKPhone', w0,
                    'NoKRelationType', w1,
                    'NoKAdd', w0
                ]);
            }
        }
    }
}

