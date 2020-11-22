namespace EMR.Administration {
    export interface TenantForm {
        TenantName: Serenity.StringEditor;
        FacilityId: Serenity.LookupEditor;
    }

    export class TenantForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Tenant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TenantForm.init)  {
                TenantForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(TenantForm, [
                    'TenantName', w0,
                    'FacilityId', w1
                ]);
            }
        }
    }
}

