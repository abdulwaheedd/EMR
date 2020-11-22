namespace EMR.Configs {
    export interface CountriesForm {
        Country: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        Population: Serenity.DecimalEditor;
        Area: Serenity.DecimalEditor;
        PopDensity: Serenity.DecimalEditor;
        CoastlineRatio: Serenity.DecimalEditor;
        NetMigration: Serenity.DecimalEditor;
        InfantMortality1000: Serenity.DecimalEditor;
        Gdp: Serenity.DecimalEditor;
        LiteracyPerc: Serenity.DecimalEditor;
        Phones: Serenity.DecimalEditor;
        Arable: Serenity.DecimalEditor;
        Crops: Serenity.DecimalEditor;
        Other: Serenity.DecimalEditor;
        Climate: Serenity.DecimalEditor;
        Birthrate: Serenity.DecimalEditor;
        Deathrate: Serenity.DecimalEditor;
        Agriculture: Serenity.DecimalEditor;
        Industry: Serenity.DecimalEditor;
        Service: Serenity.DecimalEditor;
    }

    export class CountriesForm extends Serenity.PrefixedContext {
        static formKey = 'Configs.Countries';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CountriesForm.init)  {
                CountriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(CountriesForm, [
                    'Country', w0,
                    'Region', w0,
                    'Population', w1,
                    'Area', w1,
                    'PopDensity', w1,
                    'CoastlineRatio', w1,
                    'NetMigration', w1,
                    'InfantMortality1000', w1,
                    'Gdp', w1,
                    'LiteracyPerc', w1,
                    'Phones', w1,
                    'Arable', w1,
                    'Crops', w1,
                    'Other', w1,
                    'Climate', w1,
                    'Birthrate', w1,
                    'Deathrate', w1,
                    'Agriculture', w1,
                    'Industry', w1,
                    'Service', w1
                ]);
            }
        }
    }
}

