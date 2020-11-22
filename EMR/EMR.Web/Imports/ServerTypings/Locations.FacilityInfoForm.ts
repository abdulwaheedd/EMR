namespace EMR.Locations {
    export interface FacilityInfoForm {
        FacilityId: Serenity.IntegerEditor;
        DistrictId: Serenity.LookupEditor;
        FacilityName: Serenity.StringEditor;
        FacilityNameDari: Serenity.StringEditor;
        FacilityNamePashto: Serenity.StringEditor;
        FacilityType: Serenity.LookupEditor;
        ViliCode: Serenity.StringEditor;
        GrantId: Serenity.StringEditor;
        Lat: Serenity.DecimalEditor;
        Lon: Serenity.DecimalEditor;
        Implementer: Serenity.StringEditor;
        TenantId: Serenity.LookupEditor;
    }

    export class FacilityInfoForm extends Serenity.PrefixedContext {
        static formKey = 'Locations.FacilityInfo';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FacilityInfoForm.init)  {
                FacilityInfoForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.LookupEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(FacilityInfoForm, [
                    'FacilityId', w0,
                    'DistrictId', w1,
                    'FacilityName', w2,
                    'FacilityNameDari', w2,
                    'FacilityNamePashto', w2,
                    'FacilityType', w1,
                    'ViliCode', w2,
                    'GrantId', w2,
                    'Lat', w3,
                    'Lon', w3,
                    'Implementer', w2,
                    'TenantId', w1
                ]);
            }
        }
    }
}

