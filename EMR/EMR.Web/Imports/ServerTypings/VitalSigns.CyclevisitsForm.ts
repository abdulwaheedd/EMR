namespace EMR.VitalSigns {
    export interface CyclevisitsForm {
        ScheduleId: Serenity.StringEditor;
        ActualDate: Serenity.DateEditor;
        SActualDate: Common.ShamsiDatePickerEditor;
        CareTypeId: Serenity.LookupEditor;
    }

    export class CyclevisitsForm extends Serenity.PrefixedContext {
        static formKey = 'VitalSigns.Cyclevisits';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CyclevisitsForm.init)  {
                CyclevisitsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = Common.ShamsiDatePickerEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(CyclevisitsForm, [
                    'ScheduleId', w0,
                    'ActualDate', w1,
                    'SActualDate', w2,
                    'CareTypeId', w3
                ]);
            }
        }
    }
}

