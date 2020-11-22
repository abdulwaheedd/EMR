namespace EMR.Configs {
    export interface TblDiseasesCategoryForm {
        Wardid: Serenity.IntegerEditor;
        DiseasesCategory: Serenity.StringEditor;
        DiseasesCatDari: Serenity.StringEditor;
        DiseasesCatPashto: Serenity.StringEditor;
    }

    export class TblDiseasesCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblDiseasesCategory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblDiseasesCategoryForm.init)  {
                TblDiseasesCategoryForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TblDiseasesCategoryForm, [
                    'Wardid', w0,
                    'DiseasesCategory', w1,
                    'DiseasesCatDari', w1,
                    'DiseasesCatPashto', w1
                ]);
            }
        }
    }
}

