using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


    namespace EMR.Modules.Regs
    {
        using global::EMR.Configs.Entities;
        using Serenity.ComponentModel;
        using Serenity.Data;
        using Serenity.Web;

        [LookupScript]
        public class ReferTypeLookup : RowLookupScript<TblOutcomesMotherRow>
        {
            public ReferTypeLookup()
            {
            IdField = TblOutcomesMotherRow.Fields.OutcomeId.PropertyName;
            TextField = TblOutcomesMotherRow.Fields.OutcomeDari.PropertyName;
            }

            protected override void PrepareQuery(SqlQuery query)
            {
                var fld = TblOutcomesMotherRow.Fields;
            query.Distinct(true)
                .Select(fld.OutcomeId)
                .Select(fld.OutcomeDari)
                    .Where(fld.OutcomeId==1 || fld.OutcomeId==7);
        }

            protected override void ApplyOrder(SqlQuery query)
            {
            }
        }
    }