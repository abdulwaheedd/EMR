namespace EMR.Structure {
    export interface BedReportDetailsForm {
        ReportId: Serenity.IntegerEditor;
        WardId: Serenity.LookupEditor;
        BedActive: Serenity.IntegerEditor;
    }

    export class BedReportDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Structure.BedReportDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BedReportDetailsForm.init)  {
                BedReportDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(BedReportDetailsForm, [
                    'ReportId', w0,
                    'WardId', w1,
                    'BedActive', w0
                ]);
            }
        }
    }
}

