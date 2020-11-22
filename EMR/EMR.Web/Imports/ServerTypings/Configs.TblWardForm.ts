namespace EMR.Configs {
    export interface TblWardForm {
        WardName: Serenity.StringEditor;
        WardNameD: Serenity.StringEditor;
        WardNumBeds: Serenity.IntegerEditor;
    }

    export class TblWardForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblWard';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblWardForm.init)  {
                TblWardForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(TblWardForm, [
                    'WardName', w0,
                    'WardNameD', w0,
                    'WardNumBeds', w1
                ]);
            }
        }
    }
}

