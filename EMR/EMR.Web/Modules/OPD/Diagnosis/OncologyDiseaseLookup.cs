using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


    namespace EMR.Modules.OPD.Diagnosis
    {
        using global::EMR.Configs.Entities;
        using Serenity.ComponentModel;
        using Serenity.Data;
        using Serenity.Web;

        [LookupScript]
        public class OncologyDiseaseLookup : RowLookupScript<TblWardDiseasesRow>
        {
            public OncologyDiseaseLookup()
            {
            IdField = TblWardDiseasesRow.Fields.WId.PropertyName;
            TextField = TblWardDiseasesRow.Fields.DiseaseName.PropertyName;
            }

            protected override void PrepareQuery(SqlQuery query)
            {
                var fld = TblWardDiseasesRow.Fields;
            query.Distinct(true)
                .Select(fld.WId)
                .Select(fld.DiseaseName)
                    .Where(fld.WardCode.Contains("9"));
        }

            protected override void ApplyOrder(SqlQuery query)
            {
            }
        }
    }