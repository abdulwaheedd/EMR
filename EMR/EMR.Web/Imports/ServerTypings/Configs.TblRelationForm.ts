namespace EMR.Configs {
    export interface TblRelationForm {
        RelationNameEng: Serenity.StringEditor;
        RelationName: Serenity.StringEditor;
    }

    export class TblRelationForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblRelation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblRelationForm.init)  {
                TblRelationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TblRelationForm, [
                    'RelationNameEng', w0,
                    'RelationName', w0
                ]);
            }
        }
    }
}

