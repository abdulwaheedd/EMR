using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace EMR.Pharmacy
{
    public partial class MedOrderDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "EMR.Pharmacy.MedOrderDetailsEditor";

        public MedOrderDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}

