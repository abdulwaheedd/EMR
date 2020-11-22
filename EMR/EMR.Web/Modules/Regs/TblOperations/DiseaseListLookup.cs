using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


    namespace EMR.Modules.Regs.TblOperations
    {
        using global::EMR.Configs.Entities;
        using Serenity.ComponentModel;
        using Serenity.Data;
        using Serenity.Web;

        [LookupScript]
        public class DiseaseListLookup : RowLookupScript<TblWardDiseasesRow>
        {
            public DiseaseListLookup()
            {
            IdField = TblWardDiseasesRow.Fields.WId.PropertyName;
            TextField = TblWardDiseasesRow.Fields.DiseaseDariName.PropertyName;
            }

            protected override void PrepareQuery(SqlQuery query)
            {
                var fld = TblWardDiseasesRow.Fields;
            query.Distinct(true)
                .Select(fld.WvId)
                .Select(fld.WId)
                .Select(fld.DiseaseDariName)
                    .Where(fld.WvId>0);
        }

            protected override void ApplyOrder(SqlQuery query)
            {
            }
        }
    }