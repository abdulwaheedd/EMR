namespace EMR.Regs {
    export interface TblPatDetailsForm {
        Mrid: Serenity.StringEditor;
        MRN: Serenity.StringEditor;
        ProvinceId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        PatLocation: Serenity.StringEditor;
        MariId: Serenity.LookupEditor;
        PatPhone: Serenity.StringEditor;
        Eid: Serenity.LookupEditor;
        Oid: Serenity.LookupEditor;
        PatDdateH: Common.ShamsiDatePickerEditor;
        PatDdate: Serenity.DateEditor;
    }

    export class TblPatDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Regs.TblPatDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblPatDetailsForm.init)  {
                TblPatDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = Common.ShamsiDatePickerEditor;
                var w3 = s.DateEditor;

                Q.initFormType(TblPatDetailsForm, [
                    'Mrid', w0,
                    'MRN', w0,
                    'ProvinceId', w1,
                    'DistrictId', w1,
                    'PatLocation', w0,
                    'MariId', w1,
                    'PatPhone', w0,
                    'Eid', w1,
                    'Oid', w1,
                    'PatDdateH', w2,
                    'PatDdate', w3
                ]);
            }
        }
    }
}

