namespace EMR.Structure {
    export interface BedReportsForm {
        FacilityId: Serenity.LookupEditor;
        Year: Serenity.IntegerEditor;
        Month: Serenity.IntegerEditor;
        Comment: Serenity.StringEditor;
        DetailList: BedReportDetailsEditor;
    }

    export class BedReportsForm extends Serenity.PrefixedContext {
        static formKey = 'Structure.BedReports';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BedReportsForm.init)  {
                BedReportsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = BedReportDetailsEditor;

                Q.initFormType(BedReportsForm, [
                    'FacilityId', w0,
                    'Year', w1,
                    'Month', w1,
                    'Comment', w2,
                    'DetailList', w3
                ]);
            }
        }
    }
}

