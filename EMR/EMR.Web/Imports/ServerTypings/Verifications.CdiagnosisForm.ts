namespace EMR.Verifications {
    export interface CdiagnosisForm {
        Mrid: Serenity.StringEditor;
        VisitId: Serenity.StringEditor;
        StageId: Serenity.LookupEditor;
        SelfDiagnosisId: Serenity.LookupEditor;
        SelfDiagnosisDate: Serenity.DateEditor;
        InitialDiagnosisId: Serenity.LookupEditor;
        InitialDiagnosisDate: Serenity.DateEditor;
        TopomainId: Serenity.LookupEditor;
        ToposubId: Serenity.LookupEditor;
        FinalDiagnosisId: Serenity.LookupEditor;
        FinalDiagnosisDate: Serenity.DateEditor;
        ComorbidityId: Serenity.LookupEditor;
        Comorbidity2Id: Serenity.LookupEditor;
        Comorbidity3Id: Serenity.LookupEditor;
    }

    export class CdiagnosisForm extends Serenity.PrefixedContext {
        static formKey = 'Verifications.Cdiagnosis';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CdiagnosisForm.init)  {
                CdiagnosisForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;

                Q.initFormType(CdiagnosisForm, [
                    'Mrid', w0,
                    'VisitId', w0,
                    'StageId', w1,
                    'SelfDiagnosisId', w1,
                    'SelfDiagnosisDate', w2,
                    'InitialDiagnosisId', w1,
                    'InitialDiagnosisDate', w2,
                    'TopomainId', w1,
                    'ToposubId', w1,
                    'FinalDiagnosisId', w1,
                    'FinalDiagnosisDate', w2,
                    'ComorbidityId', w1,
                    'Comorbidity2Id', w1,
                    'Comorbidity3Id', w1
                ]);
            }
        }
    }
}

