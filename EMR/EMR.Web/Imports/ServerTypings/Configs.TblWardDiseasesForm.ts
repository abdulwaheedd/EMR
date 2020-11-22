namespace EMR.Configs {
    export interface TblWardDiseasesForm {
        WardCode: Serenity.IntegerEditor;
        DiseasesCategory: Serenity.StringEditor;
        DiseasesCat: Serenity.IntegerEditor;
        DiseasesName: Serenity.StringEditor;
        DiseaseDariName: Serenity.StringEditor;
        WvId: Serenity.LookupEditor;
        DiseasesCode: Serenity.StringEditor;
        HmirCode: Serenity.StringEditor;
        HmirCodeId: Serenity.DecimalEditor;
        Status: Serenity.DecimalEditor;
    }

    export class TblWardDiseasesForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.TblWardDiseases';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblWardDiseasesForm.init)  {
                TblWardDiseasesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(TblWardDiseasesForm, [
                    'WardCode', w0,
                    'DiseasesCategory', w1,
                    'DiseasesCat', w0,
                    'DiseasesName', w1,
                    'DiseaseDariName', w1,
                    'WvId', w2,
                    'DiseasesCode', w1,
                    'HmirCode', w1,
                    'HmirCodeId', w3,
                    'Status', w3
                ]);
            }
        }
    }
}

