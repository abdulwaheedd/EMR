namespace EMR.Configs {
    export interface LkpManufacturerForm {
        ManufacturerName: Serenity.StringEditor;
        ManufacturerType: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        Website: Serenity.URLEditor;
        Email: Serenity.StringEditor;
        CellPhoneNo: Serenity.StringEditor;
    }

    export class LkpManufacturerForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.LkpManufacturer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LkpManufacturerForm.init)  {
                LkpManufacturerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.URLEditor;

                Q.initFormType(LkpManufacturerForm, [
                    'ManufacturerName', w0,
                    'ManufacturerType', w0,
                    'CountryId', w1,
                    'Website', w2,
                    'Email', w0,
                    'CellPhoneNo', w0
                ]);
            }
        }
    }
}

