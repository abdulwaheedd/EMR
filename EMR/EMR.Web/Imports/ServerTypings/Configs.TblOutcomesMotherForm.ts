namespace EMR.Configs {
    export interface TblOutcomesMotherForm {
        OutcomeEng: Serenity.StringEditor;
        OutcomeDari: Serenity.StringEditor;
    }

    export class TblOutcomesMotherForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblOutcomesMother';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblOutcomesMotherForm.init)  {
                TblOutcomesMotherForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblOutcomesMotherForm, [
                    'OutcomeEng', w0,
                    'OutcomeDari', w0
                ]);
            }
        }
    }
}

