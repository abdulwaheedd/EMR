namespace EMR.Configs {
    export interface TblChildForm {
        ChildDari: Serenity.StringEditor;
        ChildPashto: Serenity.StringEditor;
        ChildEn: Serenity.StringEditor;
    }

    export class TblChildForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblChild';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblChildForm.init)  {
                TblChildForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblChildForm, [
                    'ChildDari', w0,
                    'ChildPashto', w0,
                    'ChildEn', w0
                ]);
            }
        }
    }
}

