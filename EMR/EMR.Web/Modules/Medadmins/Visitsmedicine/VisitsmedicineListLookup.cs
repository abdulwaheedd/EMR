using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


    namespace EMR.Modules.Medadmins
{
    using EMR.Medadmins.Entities;
    using EMR.Modules.Common.Helpers;
    using global::EMR.Configs.Entities;
        using Serenity.ComponentModel;
        using Serenity.Data;
        using Serenity.Web;

        [LookupScript]
        public class VisitsmedicineListLookup : RowLookupScript<VisitsmedicineRow>
        {
            public VisitsmedicineListLookup()
            {
            IdField = VisitsmedicineRow.Fields.OrderId.PropertyName;
            TextField = VisitsmedicineRow.Fields.Medicine.PropertyName;
            }

            protected override void PrepareQuery(SqlQuery query)
            {
                var fld = VisitsmedicineRow.Fields;
            query.Distinct(true)
                .Select(fld.OrderId)
                .Select(fld.Medicine)
                    .Where(fld.Mrid==publicvars.MyMRID);
        }

            protected override void ApplyOrder(SqlQuery query)
            {
            }
        }
    }