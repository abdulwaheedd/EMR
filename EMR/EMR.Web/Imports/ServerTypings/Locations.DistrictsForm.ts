namespace EMR.Locations {
    export interface DistrictsForm {
        DistrictId: Serenity.IntegerEditor;
        DistrictEng: Serenity.StringEditor;
        DistrictDari: Serenity.StringEditor;
        DistrictPashto: Serenity.StringEditor;
        ProvinceId: Serenity.LookupEditor;
    }

    export class DistrictsForm extends Serenity.PrefixedContext {
        static formKey = 'Locations.Districts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DistrictsForm.init)  {
                DistrictsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(DistrictsForm, [
                    'DistrictId', w0,
                    'DistrictEng', w1,
                    'DistrictDari', w1,
                    'DistrictPashto', w1,
                    'ProvinceId', w2
                ]);
            }
        }
    }
}

