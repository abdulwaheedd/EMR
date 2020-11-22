namespace EMR.Regs {
    export interface TblPatientsForm {
        FacilityId: Serenity.LookupEditor;
        MRN: Serenity.StringEditor;
        PatName: Serenity.StringEditor;
        PatFatName: Serenity.StringEditor;
        PatHusbandName: Serenity.StringEditor;
        PatRealationName: Serenity.StringEditor;
        PatGender: Serenity.LookupEditor;
        PatBlooldGroup: Serenity.LookupEditor;
        PatTazkera: Serenity.StringEditor;
    }

    export class TblPatientsForm extends Serenity.PrefixedContext {
        static formKey = 'Regs.TblPatients';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblPatientsForm.init)  {
                TblPatientsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TblPatientsForm, [
                    'FacilityId', w0,
                    'MRN', w1,
                    'PatName', w1,
                    'PatFatName', w1,
                    'PatHusbandName', w1,
                    'PatRealationName', w1,
                    'PatGender', w0,
                    'PatBlooldGroup', w0,
                    'PatTazkera', w1
                ]);
            }
        }
    }
}

