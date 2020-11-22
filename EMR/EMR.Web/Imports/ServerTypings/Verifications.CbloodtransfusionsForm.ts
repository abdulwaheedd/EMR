namespace EMR.Verifications {
    export interface CbloodtransfusionsForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        DateOfVisit: Serenity.DateEditor;
        SDateOfVisit: Serenity.StringEditor;
        BloodGroupId: Serenity.LookupEditor;
        Recomquantity: Serenity.IntegerEditor;
        Transmitquantity: Serenity.IntegerEditor;
        BloodstatusId: Serenity.LookupEditor;
        RecDateTime: Serenity.DateTimeEditor;
        SRecDate: Common.ShamsiDatePickerEditor;
        TransDateTime: Serenity.DateTimeEditor;
        STransDate: Serenity.StringEditor;
    }

    export class CbloodtransfusionsForm extends Serenity.PrefixedContext {
        static formKey = 'Verifications.Cbloodtransfusions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CbloodtransfusionsForm.init)  {
                CbloodtransfusionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DateTimeEditor;
                var w5 = Common.ShamsiDatePickerEditor;

                Q.initFormType(CbloodtransfusionsForm, [
                    'Mrid', w0,
                    'VisitId', w0,
                    'DateOfVisit', w1,
                    'SDateOfVisit', w0,
                    'BloodGroupId', w2,
                    'Recomquantity', w3,
                    'Transmitquantity', w3,
                    'BloodstatusId', w2,
                    'RecDateTime', w4,
                    'SRecDate', w5,
                    'TransDateTime', w4,
                    'STransDate', w0
                ]);
            }
        }
    }
}

