namespace EMR.Configs {
    export interface TblWrdVarForm {
        Wrdid: Serenity.IntegerEditor;
        DiagnTreatComp: Serenity.IntegerEditor;
        VarNameEnglish: Serenity.StringEditor;
        VarNameDari: Serenity.StringEditor;
        VarNamePashto: Serenity.StringEditor;
        VarSpecification: Serenity.StringEditor;
    }

    export class TblWrdVarForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblWrdVar';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblWrdVarForm.init)  {
                TblWrdVarForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TblWrdVarForm, [
                    'Wrdid', w0,
                    'DiagnTreatComp', w0,
                    'VarNameEnglish', w1,
                    'VarNameDari', w1,
                    'VarNamePashto', w1,
                    'VarSpecification', w1
                ]);
            }
        }
    }
}

