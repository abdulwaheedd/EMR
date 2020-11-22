namespace EMR.FM {
    export interface LkpServicesForm {
        ServiceTypeId: Serenity.LookupEditor;
        ServiceDari: Serenity.StringEditor;
        ServicePashto: Serenity.StringEditor;
        ServiceEn: Serenity.StringEditor;
        ServicePrice: Serenity.DecimalEditor;
        Status: Serenity.BooleanEditor;
    }

    export class LkpServicesForm extends Serenity.PrefixedContext {
        static formKey = 'FM.LkpServices';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LkpServicesForm.init)  {
                LkpServicesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(LkpServicesForm, [
                    'ServiceTypeId', w0,
                    'ServiceDari', w1,
                    'ServicePashto', w1,
                    'ServiceEn', w1,
                    'ServicePrice', w2,
                    'Status', w3
                ]);
            }
        }
    }
}

