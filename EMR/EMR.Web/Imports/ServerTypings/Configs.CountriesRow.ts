namespace EMR.Configs {
    export interface CountriesRow {
        CountryId?: number;
        Country?: string;
        Region?: string;
        Population?: number;
        Area?: number;
        PopDensity?: number;
        CoastlineRatio?: number;
        NetMigration?: number;
        InfantMortality1000?: number;
        Gdp?: number;
        LiteracyPerc?: number;
        Phones?: number;
        Arable?: number;
        Crops?: number;
        Other?: number;
        Climate?: number;
        Birthrate?: number;
        Deathrate?: number;
        Agriculture?: number;
        Industry?: number;
        Service?: number;
    }

    export namespace CountriesRow {
        export const idProperty = 'CountryId';
        export const nameProperty = 'Country';
        export const localTextPrefix = 'Configs.Countries';
        export const lookupKey = 'Configs.Countries';

        export function getLookup(): Q.Lookup<CountriesRow> {
            return Q.getLookup<CountriesRow>('Configs.Countries');
        }

        export declare const enum Fields {
            CountryId = "CountryId",
            Country = "Country",
            Region = "Region",
            Population = "Population",
            Area = "Area",
            PopDensity = "PopDensity",
            CoastlineRatio = "CoastlineRatio",
            NetMigration = "NetMigration",
            InfantMortality1000 = "InfantMortality1000",
            Gdp = "Gdp",
            LiteracyPerc = "LiteracyPerc",
            Phones = "Phones",
            Arable = "Arable",
            Crops = "Crops",
            Other = "Other",
            Climate = "Climate",
            Birthrate = "Birthrate",
            Deathrate = "Deathrate",
            Agriculture = "Agriculture",
            Industry = "Industry",
            Service = "Service"
        }
    }
}

