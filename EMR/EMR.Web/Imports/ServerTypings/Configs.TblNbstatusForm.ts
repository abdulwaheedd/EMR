namespace EMR.Configs {
    export interface TblNbstatusForm {
        NbstatusDari: Serenity.StringEditor;
        NbstatusPashto: Serenity.StringEditor;
        NbstatusEng: Serenity.StringEditor;
    }

    export class TblNbstatusForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblNbstatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblNbstatusForm.init)  {
                TblNbstatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblNbstatusForm, [
                    'NbstatusDari', w0,
                    'NbstatusPashto', w0,
                    'NbstatusEng', w0
                ]);
            }
        }
    }
}

