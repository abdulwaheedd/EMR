namespace EMR.Configs {
    export interface LkpVendorForm {
        VendorName: Serenity.StringEditor;
        VendorType: Serenity.StringEditor;
        VendorRegNo: Serenity.IntegerEditor;
        Email: Serenity.StringEditor;
        CellPhoneNo: Serenity.MaskedEditor;
    }

    export class LkpVendorForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.LkpVendor';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LkpVendorForm.init)  {
                LkpVendorForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.MaskedEditor;

                Q.initFormType(LkpVendorForm, [
                    'VendorName', w0,
                    'VendorType', w0,
                    'VendorRegNo', w1,
                    'Email', w0,
                    'CellPhoneNo', w2
                ]);
            }
        }
    }
}

